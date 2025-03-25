import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import forgotSchema, { ForgotForm } from '../_schema/forgotSchema';

export function useForgotMutation() {
  const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(forgotSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: ForgotForm) => {
      const response = await axios.post('/api/forgot-password', data);
      return response.data;
    },
    onSuccess: () => {
      console.log('Forgot password email sent successfully');
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      setError('contactEmail', {
        type: 'server',
        message: error.response?.data?.message || 'Something went wrong',
      });
    },
  });

  const onSubmit = (data: ForgotForm) => {
    mutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
  };
}
