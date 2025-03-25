import React from 'react';
import { useForgotMutation } from '../_hooks/useForgotMutation';
import Button from '@/common/components/button/Button';
import InputField from '@/common/components/inputfield/InputField';
import ForgotSuccess from './ForgotSuccess';
import Link from 'next/link';

const ForgotForm = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting, isSuccess } = useForgotMutation();

  // Show ForgotSuccess after successful form submission
  if (isSuccess) {
    return <ForgotSuccess />;
  }

  return (
    <>
      <div className="mb-8 text-gray-900">
        <h3 className="mb-1 text-2xl leading-normal font-bold ">Forgot Password</h3>
        <p className="text-sm font-semibold">
          Please enter your email to receive a verification code
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            label="Email"
            inputName="contactEmail"
            inputType="email"
            register={register}
            inputErrors={errors.contactEmail}
          />

          <Button
            btnText="Submit"
            loadingText="Sending..."
            btnType="submit"
            isLoading={isSubmitting}
          />
        </form>
        <div>
          <div className="mt-6 text-center text-sm">
            <span className="text-[#737373]">Back to </span>
            <Link href={`/portfolioadmin`} className="hover:underline font-bold text-gray-900">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotForm;
