import './globals.css'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs';
import Footer from '@/components/Footer';
import Header from '@/components/navbar/Header';

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600']
});

export const metadata = {
  title: 'Adonai Real Estate | Home',
  description: 'Where you will discover the home you have been dreaming about.',
}

export default function RootLayout({
  children,
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
