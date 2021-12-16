import React, { Fragment } from 'react';
import {
Box,
Icon,
IconButton,
Link,
Text,
VStack, 
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const Footer = () => {
    return (
    <Fragment>
    <Box className="footer" textAlign="center">
    <Link href="mailto:paul@imouse.net">
    <EmailIcon/>
    </Link>
    <Text>
    @ {new Date().getFullYear()} . The Spinozist . All rights reserved
    </Text>
    </Box>
    </Fragment>


    )
}

export default Footer;