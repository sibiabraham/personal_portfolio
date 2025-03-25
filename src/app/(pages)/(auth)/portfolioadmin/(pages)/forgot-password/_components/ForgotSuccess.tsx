import Button from '@/common/components/button/Button';
import Link from 'next/link';
import React from 'react';

const ForgotSuccess = () => {
  return (
    <div className="">
      <div className="mb-6 text-gray-900">
        <h2 className="text-2xl font-bold mb-2">Check your email</h2>
        <p className=" font-semibold">We have sent a password recovery link to your email</p>
      </div>
      <Link href={`/portfolioadmin`}>
        <Button btnText="Continue" loadingText="Loading..." btnType="submit" />
      </Link>

      <div className="mt-3 text-sm text-center">
        Back to{' '}
        <Link href={`/portfolioadmin`} className="font-semibold">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default ForgotSuccess;
