import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import loginSchema, { LoginForm } from '../_schema/loginSchema';

export function useLoginMutation() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (formData: LoginForm) => {
    const result = await signIn('credentials', {
      redirect: false,
      username: formData.username,
      password: formData.password,
    });

    if (result?.error) {
      setError('root', { message: 'Invalid credentials' });
    } else {
      router.refresh();
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
  };
}
