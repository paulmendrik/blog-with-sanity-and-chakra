import React from "react";
import { Box, Heading, Link } from '@chakra-ui/react';

const Logo = () => {

return (
<Box h="auto">
<Heading className="logo">
<Link 
href="/" 
fontSize={{ base: "30px", md: "36px", lg: "60px" }} 
textTransform="uppercase"
lineHeight="1"
>
The Spinozist
</Link>
</Heading>
</Box>
)
}

export default Logo;