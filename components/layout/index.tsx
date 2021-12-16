import React, { ReactNode, Fragment } from 'react';
import Header from '../header';
import Footer from './footer';
import { Center, Container, Flex, useColorModeValue } from '@chakra-ui/react';


interface Props {
    children?: ReactNode;
    title?: string;
}

const Layout = ({ children }: Props) => {

const bg = useColorModeValue("white", "grey.600")
const color = useColorModeValue("black", "white")

return (
<Fragment>
<Container  maxW="container.lg" centerContent>
<Header/>

{children}

</Container>
<Footer/>
</Fragment>
)
}
export default Layout;
