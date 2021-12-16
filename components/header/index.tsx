import React, { Fragment } from 'react';
import { Flex } from '@chakra-ui/react';
import Logo from './logo';
import Links from './links';
import Menu from './menu';


const Header = () => {

return (
<Fragment>
<Flex py="8" justifyContent="space-between" width="100%" >
<Logo />
<Links />
<Menu />
</Flex>
</Fragment>   
)
}

export default Header;