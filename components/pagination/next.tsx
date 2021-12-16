import React, { Fragment } from "react";
import { useRouter } from 'next/router';
import PageButton from "./button";
import {Box, Icon, Link} from '@chakra-ui/react';
import { HiArrowRight } from 'react-icons/hi';


const NextButton = (props) => {

const router = useRouter();
const page = router.asPath;

return (
<Fragment>
{page === '/articles/page=4' ?
<Box className="active">
<PageButton>
<Link  onClick={() => router.push('/articles/page=4') } fontSize="1rem">
<a><Icon as={HiArrowRight} mt="0.4rem" /></a>
</Link> 
</PageButton>
</Box>
:
<PageButton>
{page === '/articles/page=1' &&
<Link  onClick={() => router.push('/blog/page=2')} fontSize="1rem">
<a><Icon as={HiArrowRight} mt="0.4rem" /></a>
</Link>
}
{page === '/articles/page=2' &&
<Link  onClick={() => router.push('/blog/page=3')} fontSize="1rem">
<a><Icon as={HiArrowRight} mt="0.4rem" /></a>
</Link>  
}
{page === '/articles/page=3' &&
<Link  onClick={() => router.push('/blog/page=4') } fontSize="1rem">
<a><Icon as={HiArrowRight} mt="0.4rem" /></a>
</Link> 
}
{page === '/articles/page=4' &&
<Link  onClick={() => router.push('/blog/page=4') } fontSize="1rem">
<a><Icon as={HiArrowRight} mt="0.4rem" /></a>
</Link> 
}
</PageButton>
}
</Fragment>
)
}

export default NextButton;