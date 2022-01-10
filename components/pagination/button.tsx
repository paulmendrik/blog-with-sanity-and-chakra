import React, { Fragment } from "react";
import { Square, useColorModeValue } from '@chakra-ui/react';


const PageButton = (props) => {

return (
<Fragment>
<Square
className="pagebutton"
bg={useColorModeValue("white", "black")}
color={useColorModeValue("#000000", "white")}
>
{props.children}
</Square>
</Fragment>
)
}

export default PageButton;