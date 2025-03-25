import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import resetSchema, { ResetPasswordForm } from '../_schema/resetSchema';

export const useResetPasswordMutation = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ResetPasswordForm) => {
      if (!token) {
        throw new Error('Invalid or missing token.');
      }
      const response = await axios.post('/api/reset-password', { ...data, token });
      return response.data;
    },
    onSuccess: () => {
      alert('Password reset successfully!');
      router.push('/portfolioadmin');
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      alert(error.response?.data?.message || 'Something went wrong');
    },
  });

  const onSubmit = async (formData: ResetPasswordForm) => {
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
