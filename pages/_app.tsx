import Footer from '@/layout/Footer'
import NavigationMenu from '@/layout/NavigationMenu'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <NavigationMenu/>
  <Component {...pageProps} />
  <Footer/>
  </>
  
}
