'use client';

import Button from '@/common/components/button/Button';
import InputField from '@/common/components/inputfield/InputField';
import { useRegisterMutation } from '../_hooks/useRegisterMutation';

const SignupForm = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } = useRegisterMutation();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-gray-500 text-sm leading-normal font-medium font-inter grid grid-cols-1 lg:grid-cols-2 gap-5"
    >
      <InputField
        label="First Name"
        inputName="firstName"
        inputType="text"
        register={register}
        inputErrors={errors.firstName}
      />
      <InputField
        label="Last Name"
        inputName="lastName"
        inputType="text"
        register={register}
        inputErrors={errors.lastName}
      />
      <InputField
        label="Username"
        inputName="username"
        inputType="text"
        register={register}
        inputErrors={errors.username}
      />
      <InputField
        label="Email"
        inputName="contactEmail"
        inputType="email"
        register={register}
        inputErrors={errors.contactEmail}
      />
      <InputField
        label="Phone Number"
        inputName="contactNumber"
        inputType="text"
        register={register}
        inputErrors={errors.contactNumber}
      />
      <InputField
        label="Password"
        inputName="password"
        inputType="password"
        register={register}
        inputErrors={errors.password}
      />
      <div className="col-span-2">
        <InputField
          label="Confirm Password"
          inputName="confirmPassword"
          inputType="password"
          register={register}
          inputErrors={errors.confirmPassword}
        />
        {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        <Button
          btnText="Sign up"
          loadingText="Registering user..."
          btnType="submit"
          isLoading={isSubmitting}
        />
      </div>
    </form>
  );
};

export default SignupForm;
