import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import registerSchema, { RegisterForm } from '../_schema/registerSchema';
import { useRouter } from 'next/navigation';

export const useRegisterMutation = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: RegisterForm) => {
      const response = await axios.post('/api/register', data);
      return response.data;
    },
    onSuccess: (data) => {
      router.push('/portfolioadmin');
      console.log(data);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error('Registration Error:', error.response?.data?.message || error.message);
    },
  });

  const onSubmit = async (formData: RegisterForm) => {
    try {
      await mutation.mutateAsync(formData);
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting: mutation.isPending,
  };
};
