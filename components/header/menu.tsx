import React, { Fragment } from 'react';
import Link from 'next/link';
import { 
Box,
Icon,
List,
ListItem,
Slide,
HStack,
useDisclosure,
useColorMode,
useColorModeValue,
} from '@chakra-ui/react';
import { BsSunFill, BsSun } from "react-icons/bs";

const Menu = () => {
const { colorMode, toggleColorMode } = useColorMode();
const { isOpen, onToggle } = useDisclosure();
const bg = useColorModeValue("black", "white");
const color = useColorModeValue("white", "black");
const menuBg = useColorModeValue("white", "black");


return (
<Fragment>
<HStack pt={[2,0,0]} className="mobile"  display={[ "block", "none"]} >
<Box as="button" className="mobile" onClick={toggleColorMode}>
{colorMode === 'light' ?  <Icon as={BsSunFill} fontSize="20px"  /> : <Icon as={BsSun} fontSize="20px" />}
</Box>
<Box as="button" className={ isOpen ? "open menu-icon" : "menu-icon"} onClick={onToggle}>
<Box as="span" 
bg={bg}  
className="line-1" 
transition="all,.3s, 0s, 0s, .3s, .3s, .3s" 
/>
<Box 
as="span" 
bg={bg} 
className="line-2" 
transition="all,.3s, 0s, 0s, .3s, .3s, .3s" 
/>
<Box 
as="span" 
bg={bg} 
className="line-3"
transition="all,.3s, 0s, 0s, .3s, .3s, .3s" 
/>
</Box> 
</HStack>
<Slide direction="left"  in={isOpen} >
 <Box full bg={menuBg}  className="menu"  >
 <List>
<ListItem py="0.5" lineHeight="1" fontSize="3xl"><Link href="/"><a>Home</a></Link></ListItem>
<ListItem py="0.5" lineHeight="1" fontSize="3xl"><Link href="/articles/page=1"><a>Articles</a></Link></ListItem>
<ListItem py="0.5" lineHeight="1" fontSize="3xl"><Link href="/long"><a>Long Read</a></Link></ListItem>
<ListItem py="0.5" lineHeight="1" fontSize="3xl"><Link href="/about"><a>About</a></Link></ListItem>
</List>
</Box> 
</Slide>
</Fragment>  
)
};

export default Menu;