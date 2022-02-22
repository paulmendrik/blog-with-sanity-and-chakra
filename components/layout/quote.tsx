import React, { Fragment, ReactNode } from "react";
import { Box,Text } from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';

type Props = {
    quote:string;
}

const Quote = ({ quote }: Props) => {
return (
<Fragment>
<Box as="blockquote">
<Text fontSize="1.25rem">
<BlockContent blocks={quote} />
</Text>
</Box>
</Fragment>
);
};

export default Quote;