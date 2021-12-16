import React from "react";
import { Box, Heading, Link } from '@chakra-ui/react';
import "@fontsource/libre-caslon-text";

const Logo = () => {

return (
<Box h="auto">
<Heading>
<Link 
href="/" 
fontFamily="Libre Caslon Text"
fontSize={{ base: "18px", md: "32px", lg: "48px" }} 
textTransform="uppercase"
lineHeight="1"
textDecoration="none"
>
The Spinozist
</Link>
</Heading>
</Box>
)
}

export default Logo;