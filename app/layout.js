import './globals.css'
import Head from 'next/head';
import { Metadata } from 'next';
import Footer from './Components/Footer';
export const metadata = {
  title: 'BurgerKing',
  description:
    'This is a development project for college use only and the main theme is to develop burgerking international brand value restaurent webapp using nextjs for single page application because of its fast rounting features',
   
  };
  <Head>
     
    </Head>
export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body >
      
        {children} 
      <Footer/>
      </body>
      
    </html>
  )
}
