'use client';
import AuthFormLayout from '@/common/components/layouts/AuthFormLayout';
import Link from 'next/link';
import SigninForm from './_components/SigninForm';

const page = () => {
  return (
    <AuthFormLayout>
      <div className="mb-8 text-gray-900">
        <h3 className="mb-1 text-2xl leading-normal font-bold ">Welcome back!</h3>
        <p className="text-sm font-semibold">Please enter your credentials to sign in!</p>
      </div>
      <div>
        <SigninForm />
      </div>
      <div>
        <div className="mt-6 text-center text-sm">
          <span className="text-[#737373]">{`Don't have an account yet?`} </span>
          <Link
            href={`/portfolioadmin/register`}
            className="hover:underline font-bold text-gray-900"
          >
            Sign up
          </Link>
        </div>
      </div>
    </AuthFormLayout>
  );
};

export default page;
