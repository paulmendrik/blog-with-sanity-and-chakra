import React, { Fragment } from 'react';
import Link from 'next/link';
import { 
Box,
Icon,
HStack,
useColorMode,
} from '@chakra-ui/react';
import { BsSunFill, BsSun } from "react-icons/bs";
import "@fontsource/pt-serif";

const Links = () => {

const { colorMode, toggleColorMode } = useColorMode();

return (
<HStack pt="6"  display={[ "none", "block"]}>
<Box as="button" fontFamily= "IBM Plex Mono" fontSize="0.75rem" textTransform="uppercase">
<Link href="/">Home</Link>
</Box>
<Box as="button" pl="4" fontFamily= "IBM Plex Mono" textTransform="uppercase">
<Link href="/articles/page=1">Articles</Link>
</Box>
<Box as="button" pl="4" fontFamily= "IBM Plex Mono"textTransform="uppercase">
<Link href="/essays">Long Read</Link>
</Box>
<Box as="button" px="4" fontFamily= "IBM Plex Mono" textTransform="uppercase">
<Link href="/about">About</Link>
</Box>
<Box as="button" className="iconbutton" onClick={toggleColorMode}>
{colorMode === 'light' ?  <Icon as={BsSunFill}   /> : <Icon as={BsSun}  />}
</Box>
</HStack>
)
}

export default Links