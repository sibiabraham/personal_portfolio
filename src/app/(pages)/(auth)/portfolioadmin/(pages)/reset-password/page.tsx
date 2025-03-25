import AuthFormLayout from '@/common/components/layouts/AuthFormLayout';
import ResetForm from './_components/ResetForm';

const ResetPassword = () => {
  return (
    <AuthFormLayout>
      <div className="mb-8 text-gray-900">
        <h3 className="mb-1 text-2xl leading-normal font-bold ">Reset Password</h3>
        <p className="text-sm font-semibold">And lets get started with your free trial</p>
      </div>
      <div className=" p-2.5">
        <ResetForm />
      </div>
    </AuthFormLayout>
  );
};

export default ResetPassword;
