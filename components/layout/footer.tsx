import React, { Fragment } from 'react';
import { Box,Link,Text, } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const Footer = () => {
    return (
    <Fragment>
    <Box className="footer" textAlign="center">
    <Link href="mailto:paul@imouse.net" fontSize={{base:"2rem", md:'2rem', lg: '3rem'}}>
    <EmailIcon/>
    </Link>
    <Text fontSize={{base:"1.25rem", md:'1.5rem', lg: '2rem'}}>
    © {new Date().getFullYear()} by The Spinozist
    </Text>
    </Box>
    </Fragment>


    )
}

export default Footer;