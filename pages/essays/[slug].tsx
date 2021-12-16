import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../../components/layout';
import dateFormat from 'dateformat';
import ViewCounter from "../../components/layout/counter";
import { Content } from "../../lib/types";
import BlockContent from '@sanity/block-content-to-react';
import { blockContentToPlainText } from "react-portable-text"
import {Avatar,Box,Grid,GridItem, Heading,  Text } from '@chakra-ui/react';
import readingTime from 'reading-time';
import '@fontsource/pt-serif';
import client from "../../lib/sanity";
import { getEssays, getEssayBySlug } from "../../lib/api";

type Props = {
  essay: Content;
}

const Essay = ({ essay }: Props) => {

            
return (
<Fragment>
<Head><title>The Spinozist - {essay.title} </title></Head>
<Layout>
<Box as="article">
<Heading 
pb="1.25rem"
mt="2rem"
mb="2rem"
borderBottom="1px"
borderBottomColor="#E2E8F0"
borderBottomStyle="solid"
>
<Text 
as="h1"
py="1.25rem"
fontFamily="PT Serif"
fontSize="2.25rem"
fontWeight="300"
lineHeight="1.5"
>
{essay.title}
</Text>
<Box as="sub" py={6}>
<Grid 
templateColumns='repeat(2, 1fr)' 
templateRows='repeat(1, 1ft)'
gap={6}
>
<GridItem
colStart={1}
fontSize={['xs', 'xs', 'sm', 'sm']}
fontFamily="PT Serif"
fontWeight="300"
lineHeight="1.5"
letterSpacing="0.07rem"
>
<Avatar name="Paul Mendrik" size="xs" src="/avatar.png" border="1px solid textPrimary"  marginRight={2} />

Paul Mendrik /{' '}
{dateFormat(Date.parse(essay.publishedAt), 'd mmmm, yyyy')}

</GridItem>
<GridItem
colEnd={12}
fontFamily="PT Serif"
fontSize={['xs', 'xs', 'sm', 'sm']}
fontWeight="300"
lineHeight="1.5rem" 
>
{readingTime(blockContentToPlainText(essay.main)).text} &bull; <ViewCounter slug={essay.slug}  /> 
</GridItem>
</Grid>
</Box>
</Heading>
<BlockContent blocks={essay.main}></BlockContent>
</Box>
</Layout>
</Fragment>
)
}

export default Essay;

export async function getStaticProps({ params }) {

const { slug = "" } = params
const essay = await client.fetch(getEssays, { slug })

return {
props: { essay },
revalidate: 10,
}
}

export async function getStaticPaths() {

const paths = await client.fetch(getEssayBySlug)

return { 
paths, 
fallback: false
}
}
