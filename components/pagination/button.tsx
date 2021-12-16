import React, { Fragment } from "react";
import { Square, useColorModeValue } from '@chakra-ui/react';


const PageButton = (props) => {

return (
<Fragment>
<Square
className="pagebutton"
bg={useColorModeValue("white", "black")}
color={useColorModeValue("#7d7d7d", "white")}
>
{props.children}
</Square>
</Fragment>
)
}

export default PageButton;