import { PageLayoutQueryProps } from '@/common/types/common';
import Image from 'next/image';

const AuthFormLayout = ({ children, hasLogo }: PageLayoutQueryProps) => {
  return (
    <div className="flex flex-auto flex-col h-screen font-inter">
      {/* dark:bg-gray-800 dark:text-white */}
      <div className="flex h-full p-6 bg-white">
        <div className="flex flex-col justify-center items-center flex-1">
          <div className="w-full xl:max-w-[600px] px-8 max-w-[380px]">
            {hasLogo && (
              <div className="mb-8">
                <div className="w-[60px]">
                  <Image alt="" src={'/assets/jpg_png/logo.png'} width={60} height={60} />
                </div>
              </div>
            )}
            {children}
          </div>
        </div>
        <div className="py-6 px-10 lg:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative max-w-[520px] 2xl:max-w-[720px]">
          <Image
            alt="Auth Background"
            src="/assets/jpg_png/auth-side-bg.png"
            className="absolute h-full w-full top-0 left-0 rounded-3xl"
            width={720}
            height={897}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthFormLayout;
