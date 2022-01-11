import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../components/layout';
import { Box, HStack, Heading, Text} from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import { About } from "../lib/types";
import client from "../lib/sanity";

type Props = {
	page: About[]; 
}

const About = ({ page }) => {
    return (
    <Fragment>
    <Layout>
    <Head>
    <title>The Spinozist - About</title></Head>
    <meta name="description" content="the Spinozist About" />
    <Box>
    <Heading 
    as="h1" 
    fontSize="3rem"
    fontFamily= "IBM Plex Mono"
    lineHeight="1.5"
    borderBottom="1px"
    borderBottomColor="#E2E8F0"
    borderBottomStyle="solid"
    >
    {page.title}
    </Heading>
    <Box  
   as="article"
   py="2rem" 
   fontFamily= "IBM Plex Mono"
   color="#222222"
    >
    <BlockContent blocks={page.main}></BlockContent>
    </Box>
    </Box>
    </Layout>
    </Fragment>
    )
}

export async function getStaticProps() {
    const query = '*[ _type == "pages" && title=="About"][0]'
    const page = await client.fetch(query)
    return {
      props: { page },
      revalidate: 1
    }
  }
export default About;

