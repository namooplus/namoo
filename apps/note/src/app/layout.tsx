import '@/assets/styles/globals.css';

import type { Metadata } from 'next';
import LocalFont from 'next/font/local';

import { classNames } from '@/utils/classNames';

const pretendard = LocalFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '나무사유',
  description: "namoo's note",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={classNames(
          pretendard.variable,
          'font-pretendard antialiased',
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
