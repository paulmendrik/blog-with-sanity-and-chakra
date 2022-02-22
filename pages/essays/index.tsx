import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../../components/layout';
import { Content } from "../../lib/types";
import Essays from "../../components/layout/essays";
import { Box, Heading } from '@chakra-ui/react';
import client from "../../lib/sanity";

type Props = {
    essays: Content[];
}


const Index: React.FC<Props> = ({ essays }) => {


return (


<Fragment>
<Head><title>The Spinozist - Essays</title></Head>
<Layout>
<Heading as="h1" className="heading" fontSize={{base:"2rem", md:'2rem', lg: '3rem'}} >
<strong>Essays. </strong> Long read articles on a variety of subjects and observations.
</Heading>
{essays.map((essay) => (
<Essays props={essay} />
))}
<Box h="50vh"></Box>
</Layout>
</Fragment>

);
};

export async function getStaticProps() {

const query = '*[ _type == "essays"]'
const essays = await client.fetch(query)
return { props: { essays }, revalidate: 1 }
}

export default Index;
