import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../../components/layout';
import dateFormat from 'dateformat';
import ViewCounter from "../../components/layout/counter";
import { Content } from "../../lib/types";
import BlockContent from '@sanity/block-content-to-react';
import { blockContentToPlainText } from "react-portable-text"
import {Box,Grid,GridItem, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import readingTime from 'reading-time';
import client from "../../lib/sanity";
import { getEssays, getEssayBySlug } from "../../lib/api";

type Props = {
  essay: Content;
}

const Essay = ({ essay }: Props) => {

const text = useColorModeValue("#222222", "#D1D5DB")
            
return (
<Fragment>
<Head><title>The Spinozist - {essay.title} </title></Head>
<Layout>
<Box>
<Heading 
as="h1"
className="title"
fontSize={{base:"2rem", md:'3rem', lg: '3.75rem'}}
>
{essay.title}
</Heading>

<Box className="meta"  pt="1rem" fontSize={{base:"1rem", md:'1.25rem', lg: '1.75rem'}}>
<Grid 
templateColumns='repeat(2, 1fr)' 
templateRows='repeat(1, 1ft)'
gap={2}
>
<GridItem colStart={1} >
{dateFormat(Date.parse(essay.publishedAt), 'd.mm.yyyy')}
</GridItem>
<GridItem colEnd={6} >
{readingTime(blockContentToPlainText(essay.main)).text} &bull; <ViewCounter slug={essay.slug}  /> 
</GridItem>
</Grid>
</Box>
<Text className='intro' fontSize={{base:"1.6rem", md:'2rem', lg: '3rem'}}  color={text}>
<BlockContent blocks={essay.intro} />
</Text>
<Box  
as="article"
py={{base:"1rem", md:'2.2rem', lg: '4rem'}}
fontSize={{base:"1.6rem", md:'2rem', lg: '2.4rem'}}
color={text}
>
<BlockContent blocks={essay.main}></BlockContent>
</Box>
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
