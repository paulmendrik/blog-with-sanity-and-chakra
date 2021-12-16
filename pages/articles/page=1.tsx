import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../../components/layout';
import { Content } from "../../lib/types";
import Grid from "../../components/layout/grid";
import Pagination from "../../components/pagination/pagination";
import { Heading,  Text } from '@chakra-ui/react';
import client from "../../lib/sanity";

type Props = {
    articles: Content[];
}


const One: React.FC<Props> = ({ articles }) => {


return (


<Fragment>
<Head><title>The Spinozist - Blog</title></Head>
<Layout>
<Heading 
    as="h1" 
    pb="3rem"
    mt="2rem"
    mb="2rem"
    w="100%"
    fontSize="3rem"
    fontFamily="PT Serif"
    fontWeight="300"
    lineHeight="1.5"
    textAlign="left"
    borderBottom="1px"
    borderBottomColor="#E2E8F0"
    borderBottomStyle="solid"
>
Latest Articles
</Heading>
{articles.map((article) => (
<Grid props={article} />
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
