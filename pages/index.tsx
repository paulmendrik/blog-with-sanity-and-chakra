import React, { Fragment } from "react";
import Layout from '../components/layout';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { Home } from "../lib/types";
import BlockContent from '@sanity/block-content-to-react';
import client from "../lib/sanity";
import Head from 'next/head';

type Props = {
  page: Home[];
}

function Index({ page }) {

const time = useColorModeValue("#000000", "#D1D5DB")
const link = useColorModeValue("#000000", "#F3F4F6")
const text = useColorModeValue("#222222", "#D1D5DB")

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
fontFamily= "729"
color={text}
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