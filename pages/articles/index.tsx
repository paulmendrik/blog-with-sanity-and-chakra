import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../../components/layout';
import { Content } from "../../lib/types";
import Grid from "../../components/layout/grid";
import { Heading, Text } from '@chakra-ui/react';
import client from "../../lib/sanity";

type Props = {
    articles: Content[];
}


const Index: React.FC<Props> = ({ articles }) => {


return (


<Fragment>
<Head><title>The Spinozist - Articles</title></Head>
<Layout>
<Heading as="h1" className="heading" fontSize={{base:"2rem", md:'2rem', lg: '3rem'}} >
<strong>Articles. </strong>Essays on philosophical topics exploring life's big questions. 
</Heading>
{articles.map((article) => (
<Grid props={article} />
))}
</Layout>
</Fragment>

);
};

export async function getStaticProps() {

const query = '*[ _type == "articles"]| order(_createdAt desc)[0..7]'
const articles = await client.fetch(query)
return { props: { articles }, revalidate: 1 }
}

export default Index;
