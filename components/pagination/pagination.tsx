import React, { Fragment } from "react";
import { useRouter } from 'next/router';
import { Flex, Link, useColorModeValue } from '@chakra-ui/react';
import PageButton from "./button";
import NextButton from "./next";
import BackButton from "./back";


const Pagination = () => {

const router = useRouter();

return (
<Flex
bg={useColorModeValue("white", "#1A202C")}
p={50}
w="full"
alignItems="center"
justifyContent="center"
>
<Flex>
<Fragment>
<BackButton/>
<PageButton><Link  onClick={() => router.push('/articles/page=1')} fontFamily= "IBM Plex Mono" fontSize="1rem"><a>1</a></Link></PageButton>
<PageButton><Link  onClick={() => router.push('/articles/page=2')} fontFamily= "IBM Plex Mono" fontSize="1rem"><a>2</a></Link></PageButton>
<PageButton><Link  onClick={() => router.push('/articles/page=3')} fontFamily= "IBM Plex Mono" fontSize="1rem"><a>3</a></Link></PageButton>
<PageButton><Link  onClick={() => router.push('/articles/page=4')} fontFamily= "IBM Plex Mono" fontSize="1rem"><a>4</a></Link></PageButton>
<NextButton />
</Fragment>
</Flex>
</Flex>
);
};

export default Pagination;