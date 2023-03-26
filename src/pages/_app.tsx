import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ChatBox from '../components/SupportChat'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
  </>
}
