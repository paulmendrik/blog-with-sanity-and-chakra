import React, { Fragment } from "react";
import Head from 'next/head';

type IMetaProps = {
    title?: string;
    description?: string;
};

const Meta = ({ title, description }: IMetaProps) => {
    return (
    <Fragment>
    <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" /> 
    <meta name="description"  content={description} key="description" />
    <link rel="icon" href="/public/favicon.ico" key="favicon" />
    </Head>
    </Fragment>
    );
};

export { Meta };