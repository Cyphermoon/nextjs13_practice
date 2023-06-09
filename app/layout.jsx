import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next js 13 Practice',
  description: 'This project is to get familiar with Next.js 123',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
