import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Providers from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb clone',
  description: 'This is the IMDb colne website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          
          <Header/>

          <Navbar/>

          {children}

        </Providers>
      </body>
    </html>
  )
}
