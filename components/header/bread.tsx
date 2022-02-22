import React from 'react';
import { 
Box, useColorModeValue
} from '@chakra-ui/react';

const Bread = () => {
const bg = useColorModeValue("black", "white");

return (
<Box className='bread' bg={bg} />
)
};

export default Bread;