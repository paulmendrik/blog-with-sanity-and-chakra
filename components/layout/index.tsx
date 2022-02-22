import React, { ReactNode, Fragment } from 'react';
import { motion } from "framer-motion";
import Header from '../header';
import Footer from './footer';
import { Container, useColorModeValue } from '@chakra-ui/react';


interface Props {
    children?: ReactNode;
    title?: string;
}

const variants = {
hidden: { opacity: 0, x: -1000, y: 0 },
enter: { opacity: 1, x: 0, y: 0 },
exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children }: Props) => {

const bg = useColorModeValue("white", "grey.600")
const color = useColorModeValue("black", "white")

return (
<Fragment>
<Container 
w={{base:"90%", md:'90%', lg: '100%'}}
maxW="container.lg" 
centerContent
>
<Header/>
<motion.main
initial="hidden"
animate="enter"
exit="exit"
variants={variants}
transition={{ type: 'linear' }}
>
{children}
</motion.main>
</Container>
<Footer/>
</Fragment>
)
}
export default Layout;
