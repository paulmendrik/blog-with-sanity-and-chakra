import React, { Fragment } from "react";
import Layout from '../components/layout';
import Designer from "../components/animations/designer";
import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';



const Design = () => {
return (
<Fragment>
<Layout>
<SimpleGrid
columns={{ base: 1, md: 2 }}
spacing={0}
_after={{
pos: "absolute",
top: 0,
bottom: 0,
right: 0,
zIndex: -1,
content: '" "',
}}
>
<Flex
direction="column"
alignItems="start"
justifyContent="center"
px={{ base: 4, lg: 20 }}
py={24}
>
<Text 
as="h1"
mb={6}
fontSize={{ base: "4xl", md: "4xl", lg: "5xl"}}
color="#000"
lineHeight="shorter"
>
WEB DESIGN & DEVELOPMENT
</Text>
</Flex>
<Box>
<Designer/>
</Box>
</SimpleGrid>
</Layout>
</Fragment>
)
}

export default Design;

