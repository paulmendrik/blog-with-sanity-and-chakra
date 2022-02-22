import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../../components/layout';
import { Content } from "../../lib/types";
import Grid from "../../components/layout/grid";
import Pagination from "../../components/pagination/pagination";
import { Heading } from '@chakra-ui/react';
import client from "../../lib/sanity";

type Props = {
    articles: Content[];
}


const One: React.FC<Props> = ({ articles }) => {


return (


<Fragment>
<Head>
<title>The Spinozist - Blog</title>
<meta name="description" content="the Spinozist Blog" />
</Head>
<Layout>
<Heading 
as="h1" 
py="1.5rem"
mb="1rem"
w="100%"
fontSize={{base:"1.5rem", md:'2rem', lg: '2rem'}}
fontWeight="bold"
lineHeight="1.6"
textAlign="left"
borderBottom="1px"
borderBottomColor="#E2E8F0"
borderBottomStyle="solid"
>
<strong>Latest Articles</strong>
</Heading>
{articles.map((article) => (
<Grid key={article.title} props={article} />
))}
<Pagination />
</Layout>
</Fragment>

);
};

export async function getStaticProps() {

const query = '*[ _type == "articles"]|order(order)[0..3]'
const articles = await client.fetch(query)
return { props: { articles }, revalidate: 1 }
}

export default One;
