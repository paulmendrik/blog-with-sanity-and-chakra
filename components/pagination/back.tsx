import React, { Fragment } from "react";
import { useRouter } from 'next/router';
import PageButton from "./button";
import { Box, Icon, Link} from '@chakra-ui/react';
import { HiArrowLeft, } from 'react-icons/hi';


const BackButton = (props) => {

const router = useRouter();
const page = router.asPath;

return (
<Fragment>
{page === '/articles/page=1'  ?
<Box className="active">
<PageButton>
<Link  onClick={() => router.back()} fontWeight="600" fontSize="1rem" cursor="none">
<a><Icon as={HiArrowLeft} mt="0.4rem" /></a>
</Link>
</PageButton>
</Box>
:
<PageButton>
{page === '/articles/page=2' &&
<Link  onClick={() => router.push('/blog/page=1')} fontWeight="600" fontSize="1rem">
<a><Icon as={HiArrowLeft} mt="0.4rem" /></a>
</Link>
}
{page === '/articles/page=3' &&
<Link  onClick={() => router.push('/blog/page=2')} fontWeight="600" fontSize="1rem">
<a><Icon as={HiArrowLeft} mt="0.4rem" /></a>
</Link>
}
{page === '/articles/page=4' &&
<Link  onClick={() => router.push('/blog/page=3')} fontWeight="600" fontSize="1rem">
<a><Icon as={HiArrowLeft} mt="0.4rem" /></a>
</Link>
}
</PageButton>
}
</Fragment>
)
}

export default BackButton;