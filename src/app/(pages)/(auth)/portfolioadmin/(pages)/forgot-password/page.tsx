'use client';
import AuthFormLayout from '@/common/components/layouts/AuthFormLayout';
import ForgotForm from './_components/ForgotForm';

const page = () => {
  return (
    <AuthFormLayout hasLogo={false}>
      <ForgotForm />
    </AuthFormLayout>
  );
};

export default page;
