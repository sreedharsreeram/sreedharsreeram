import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sreeram Sreedhar - Personal Website',
  description: 'Welcome to my personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="transition-colors duration-500 ease-in-out"
    >
      <body
        className={`bg-white text-gray-800 dark:bg-gray-900 dark:text-white ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
