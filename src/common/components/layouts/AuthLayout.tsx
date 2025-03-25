'use client';
import { PageLayoutQueryProps } from '@/common/types/common';
import { cn } from '@/common/utils/cn';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const AuthLayout = ({ children, className }: PageLayoutQueryProps) => {
  const pathname = usePathname();
  const mainPages = [
    '/portfolioadmin',
    '/portfolioadmin/register',
    '/portfolioadmin/forgot-password',
    '/portfolioadmin/reset-password',
  ];
  const isMainPage = mainPages.includes(pathname);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <main className="font-inter">
          {!isMainPage && <p>Header</p>}
          <div
            className={cn(
              'border-x-high-grey max-w-full-page mx-auto overflow-hidden min-[1921px]:border-x',
              className
            )}
          >
            <div className="">{children}</div>
          </div>
          {!isMainPage && <p>Footer</p>}
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default AuthLayout;
