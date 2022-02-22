import React, { Fragment } from "react";
import Layout from '../components/layout';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { Home } from "../lib/types";
import BlockContent from '@sanity/block-content-to-react';
import client from "../lib/sanity";
import Head from 'next/head';

type Props = {
  page: Home[];
}

function Index({ page }) {
const text = useColorModeValue("#222222", "#D1D5DB")

return (
<Fragment>
<Head>
<title>The Spinozist</title>
<meta name="description" content="the Spinozist" />
</Head>
<Layout>
<Text as="div" className="intro" fontSize={{base:"2rem", md:'2.4rem', lg: '3rem'}} color={text}>
<BlockContent blocks={page.intro} />
</Text>
<Box 
as="article"
py={{base:"1rem", md:'2rem', lg: '4rem'}}
fontSize={{base:"1.6rem", md:'2rem', lg: '2.2rem'}}
color={text}
>
<BlockContent blocks={page.main} />
</Box>
</Layout>
</Fragment>
  )
}

export async function getStaticProps() {
  const query = '*[ _type == "home" && title=="Home"][0]'
  const page = await client.fetch(query)
  return {
    props: { page },
    revalidate: 1
  }
}

export default Index;