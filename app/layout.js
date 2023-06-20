import Navbar from '@/components/navbar/Navbar';
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer';

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
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
