import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../../components/layout';
import { Content } from "../../lib/types";
import Grid from "../../components/layout/grid";
import Pagination from "../../components/pagination/pagination";
import client from "../../lib/sanity";

type Props = {
    articles: Content[];
}


const Index: React.FC<Props> = ({ articles }) => {


return (


<Fragment>
<Head><title>The Spinozist - Blog</title></Head>
<Layout>
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

export default Index;
