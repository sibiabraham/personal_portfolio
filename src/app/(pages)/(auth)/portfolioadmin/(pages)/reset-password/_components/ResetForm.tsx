'use client';

import Button from '@/common/components/button/Button';
import InputField from '@/common/components/inputfield/InputField';
import { useResetPasswordMutation } from '../_hooks/useRestPasswordMutation';

const ResetForm = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useResetPasswordMutation();
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Password"
          inputName="password"
          inputType="password"
          register={register}
          inputErrors={errors.password}
        />

        <InputField
          label="Confirm Password"
          inputName="confirmPassword"
          inputType="password"
          register={register}
          inputErrors={errors.confirmPassword}
        />
        {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        <Button
          btnText="Reset Password"
          loadingText="Resetting..."
          btnType="submit"
          isLoading={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ResetForm;
