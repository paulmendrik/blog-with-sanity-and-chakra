import React, { Fragment } from "react";
import Head from 'next/head';
import Layout from '../../components/layout';
import { Content } from "../../lib/types";
import Essays from "../../components/layout/essays";
import client from "../../lib/sanity";

type Props = {
    essays: Content[];
}


const Index: React.FC<Props> = ({ essays }) => {


return (


<Fragment>
<Head><title>The Spinozist - Blog</title></Head>
<Layout>
{essays.map((essay) => (
<Essays props={essay} />
))}
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
