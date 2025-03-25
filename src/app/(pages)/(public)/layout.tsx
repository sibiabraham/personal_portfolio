import Loading from '@/app/loading';
import '@/app/styles/globals.css';
import MainLayout from '@/common/components/layouts/MainLayout';
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
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
