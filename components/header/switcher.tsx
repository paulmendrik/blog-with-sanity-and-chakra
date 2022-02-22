import React from 'react';
import { Box, Icon, useColorMode } from '@chakra-ui/react'
import { MdWbSunny, MdOutlineWbSunny} from 'react-icons/all'

const Switcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
  <Box as="button" fontWeight="400" fontSize={{ base: "1.6rem", md: "1.8rem", lg: "2.2rem" }} lineHeight="1" onClick={toggleColorMode}>
  {colorMode === 'light' ?  <Icon as={MdOutlineWbSunny}   /> : <Icon as={MdWbSunny}  />}
  </Box>

  )
}

export default Switcher;