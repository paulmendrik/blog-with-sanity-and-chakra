import React, { Fragment } from 'react';
import {
Box,
Link,
Text, 
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const Footer = () => {
    return (
    <Fragment>
    <Box className="footer" fontFamily="729" fontWeight="700"  textAlign="center">
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