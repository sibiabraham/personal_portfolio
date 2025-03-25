'use client';
import { PageLayoutQueryProps } from '@/common/types/common';
import { cn } from '@/common/utils/cn';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';

const MainLayout = ({ children, className }: PageLayoutQueryProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <main className="font-inter">
          <div
            className={cn(
              'border-x-high-grey max-w-full-page mx-auto overflow-hidden min-[1921px]:border-x',
              className
            )}
          >
            <div className="h-dvh w-dvw">{children}</div>
          </div>
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default MainLayout;
