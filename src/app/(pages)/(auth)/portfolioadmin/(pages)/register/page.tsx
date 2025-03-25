import AuthFormLayout from '@/common/components/layouts/AuthFormLayout';
import Link from 'next/link';
import SignupForm from './_components/SignupForm';

const page = () => {
  return (
    <AuthFormLayout>
      <div className="mb-8 text-gray-900">
        <h3 className="mb-1 text-2xl leading-normal font-bold ">Sign Up</h3>
        <p className="text-sm font-semibold">And lets get started with your free trial</p>
      </div>
      <div className=" p-2.5">
        <SignupForm />
      </div>

      <div>
        <div className="mt-6 text-center text-sm">
          <span className="text-[#737373]">Already have an account? </span>
          <Link href={`/portfolioadmin`} className="hover:underline font-bold text-gray-900">
            Sign in
          </Link>
        </div>
      </div>
    </AuthFormLayout>
  );
};

export default page;
