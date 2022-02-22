import React, { Fragment } from 'react';
import Bread from './bread';
import { 
Box,
Button,
useDisclosure,
useColorModeValue,
} from '@chakra-ui/react';


const Toggler = () => {
const { isOpen, onToggle } = useDisclosure();
return (
<Fragment>
<Box as="button" top="4" className={ isOpen ? "open toggler" : "toggler"} onClick={onToggle}>
<Bread/>
<Bread/>
</Box> 
</Fragment>  
)
};

export default Toggler;