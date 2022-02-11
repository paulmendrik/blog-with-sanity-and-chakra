import '../styles/app.css';
import "@fontsource/ibm-plex-mono";
import Fonts from '../components/fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from "framer-motion";
import theme from '../theme';
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
  <AnimatePresence exitBeforeEnter  initial={false} >
  <ChakraProvider resetCSS theme={theme}>
  <Fonts />
  <Component {...pageProps} />
  </ChakraProvider>
  </AnimatePresence>

  )
}

export default MyApp
