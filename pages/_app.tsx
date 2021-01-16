import { AppProps } from 'next/app'
import '@shared/globals.ts'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
