import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Family Upholstery | Carrollton, Georgia',
  description: 'Furniture upholstery, restoration, and custom interiors in Carrollton, Georgia.',
  metadataBase: new URL('https://family-upholstery-carrollton-draft.hale-kite-0006.chatgpt.site'),
  openGraph: {
    title: 'Family Upholstery | Carrollton, Georgia',
    description: 'Furniture with a future. Upholstery, restoration, and custom interiors in Carrollton, Georgia.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Upholstery | Carrollton, Georgia',
    description: 'Furniture with a future. Upholstery, restoration, and custom interiors in Carrollton, Georgia.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
