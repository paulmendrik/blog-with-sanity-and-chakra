import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Logo from './logo';
import Bread from './bread';
import { 
Box,
Collapse,
Flex,
HStack, 
useDisclosure
 } from '@chakra-ui/react';

const Switcher = dynamic(() => import('./switcher'))

const Header = () => {
const { isOpen, onToggle } = useDisclosure();

return (
<Fragment>
<Flex className='header' py={{ base: "2rem", md: "3rem", lg: "5rem" }}>
<Logo />
<Box as="button" 
top={{ base: "4", md: "5", lg: "12" }} 
w={{ base: "18px", md: "20px", lg: "28px" }} 
h="16px"
className={ isOpen ? "open toggler" : "toggler"} 
onClick={onToggle}
>
<Bread/>
<Bread/>
<Bread/>
</Box>
</Flex>
<Collapse in={isOpen} animateOpacity>
<Flex>
<HStack pb="4" className='menu' >
<Switcher/> 
<Box as="button"  fontSize={{ base: "1.6rem", md: "1.8rem", lg: "2.2rem" }} >
<Link href="/">Home</Link>
</Box>
<Box as="button" fontSize={{ base: "1.6rem", md: "1.8rem", lg: "2.2rem" }} >
<Link href="/articles">Articles</Link>
</Box>
<Box as="button" fontSize={{ base: "1.6rem", md: "1.8rem", lg: "2.2rem" }} >
<Link href="/essays">Essays</Link>
</Box>
<Box as="button"  fontSize={{ base: "1.6rem", md: "1.8rem", lg: "2.2rem" }}>
<Link href="/about">About</Link>
</Box>
</HStack>
</Flex>
</Collapse>
</Fragment>   
)
}

export default Header;