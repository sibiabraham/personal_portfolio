import Loading from '@/app/loading';
import '@/app/styles/globals.css';
import AuthLayout from '@/common/components/layouts/AuthLayout';
import { ThemeProvider } from '@/common/context/theme-provider/theme-provider';
import { inter } from '@/common/fonts';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Suspense fallback={<Loading />}>
          <ThemeProvider>
            <AuthLayout>{children}</AuthLayout>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
