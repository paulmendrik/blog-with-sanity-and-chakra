import React, { Fragment } from "react";
import Layout from '../components/layout';
import { Box } from '@chakra-ui/react';
import { Home } from "../lib/types";
import BlockContent from '@sanity/block-content-to-react';
import client from "../lib/sanity";
import Head from 'next/head';

type Props = {
  page: Home[];
}

function Index({ page }) {

return (
<Fragment>
<Layout>
<Head>
<title>The Spinozist - Home</title>
<meta name="description" content="the Spinozist Home" />
</Head>
<Box> 
<Box
className="index" 
as="article"
py="2rem" 
borderTop="1px"
borderTopColor="#E2E8F0"
borderTopStyle="solid"
fontFamily= "IBM Plex Mono"
color="#222222"
>
<BlockContent blocks={page.main} />
</Box>
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