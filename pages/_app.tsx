import '../styles/app.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider resetCSS theme={theme}>
    <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp