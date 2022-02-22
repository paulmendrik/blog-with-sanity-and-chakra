import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../components/layout';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import { Content } from "../lib/types";
import client from "../lib/sanity";

type Props = {
	about: Content; 
}

const About = ({ about }) => {
  const text = useColorModeValue("#222222", "#D1D5DB")
  return (
    <Fragment>
    <Layout>
    <Head>
    <title>The Spinozist - About</title></Head>
    <meta name="description" content="the Spinozist About" />
    <Box>
    <Heading as="h1" className="heading" fontSize={{base:"2rem", md:'2rem', lg: '3.2rem'}} >
   <strong>About. </strong>Whatsoever is contrary to nature is contrary to reason, and whatsoever is contrary to reason is absurd.
   </Heading>
   <Text as="div" className="intro" fontSize={{base:"1.6rem", md:'2rem', lg: '3rem'}} color={text}>
    <BlockContent blocks={about.intro} />
    </Text>
    <Box  as="article" 
    py={{base:"1rem", md:'2rem', lg: '4rem'}}
    fontSize={{base:"1.6rem", md:'2rem', lg: '2.4rem'}} 
    >
    <BlockContent blocks={about.main}></BlockContent>
    </Box>
    </Box>
    </Layout>
    </Fragment>
    )
}

export async function getStaticProps() {
    const query = '*[ _type == "about" && title=="About"][0]'
    const about = await client.fetch(query)
    return {
      props: { about },
      revalidate: 1
    }
  }
export default About;

