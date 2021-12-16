import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../components/layout';
import { Box, HStack, Heading, Text} from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import { About } from "../lib/types";
import '@fontsource/pt-serif';
import client from "../lib/sanity";

type Props = {
	page: About[]; 
}

const About = ({ page }) => {
    return (
    <Fragment>
    <Head><title>The Spinozist - About</title></Head>
    <Layout>
    <HStack>
    {page.map((about, index) => (
    <Box as="article">
    <Heading 
    as="h1" 
    pb="3rem"
    mt="2rem"
    mb="2rem"
    fontSize="3rem"
    fontFamily="PT Serif"
    fontWeight="300"
    lineHeight="1.5"
    borderBottom="1px"
    borderBottomColor="#E2E8F0"
    borderBottomStyle="solid"
    >
    {about.title}
    </Heading>
    <BlockContent blocks={about.main}></BlockContent>
    </Box>
    ))}
    </HStack>
    </Layout>
    </Fragment>
    )
}

export async function getStaticProps() {
    const query = '*[ _type == "pages" && title=="About"]'
    const page = await client.fetch(query)
    return {
      props: { page },
      revalidate: 1
    }
  }
export default About;

