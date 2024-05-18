import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex justify-center items-start w-screen h-screen bg-primary-lightest',
          roboto.className,
        )}
      >
        <main className={'max-w-screen-sm w-full h-full bg-white px-6 border'}>
          {children}
        </main>
      </body>
    </html>
  );
}
