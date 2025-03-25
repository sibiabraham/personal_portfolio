import InputField from '@/common/components/inputfield/InputField';
import { useLoginMutation } from '../_hooks/useLoginMutation';
import Button from '@/common/components/button/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LoginForm() {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useLoginMutation();
  const pathname = usePathname();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        label="Username"
        inputName="username"
        inputType="text"
        register={register}
        inputErrors={errors.username}
      />

      <InputField
        label="Password"
        inputName="password"
        inputType="password"
        register={register}
        inputErrors={errors.password}
      />

      {errors.root && <p className="text-red-500">{errors.root.message}</p>}
      <div className="mb-7 mt-2">
        <Link
          href={`${pathname}/forgot-password`}
          className="font-semibold text-gray-900 mt-2 underline"
        >
          Forgot password?
        </Link>
      </div>
      <Button
        btnText="Login"
        loadingText="Logging-in..."
        btnType="submit"
        isLoading={isSubmitting}
      />
    </form>
  );
}
