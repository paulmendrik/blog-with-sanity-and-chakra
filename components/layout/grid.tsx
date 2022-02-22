import React, { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dateFormat from 'dateformat';
import { Box, Divider, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { Content } from "../../lib/types";
import { ArrowForwardIcon } from '@chakra-ui/icons';


type Props = {
    props: Content;
}
  
const Grid: React.FC<Props> = ({ props }) => {

const router = useRouter();
const page = router.asPath;
const time = useColorModeValue("#000000", "#D1D5DB")
const link = useColorModeValue("#222222", "#F3F4F6")
const text = useColorModeValue("#222222", "#D1D5DB")

return (
<Fragment>
<Flex py={6}  w="full" alignItems="center" justifyContent="center">
<Flex>
<Box  
w={{base:"100%", md: "33%", lg: "33%"}} 
display={{base:"block", md:"block", lg:"block" }}
>

{page === '/articles' ?
<Link href={'articles/' + props.slug.current} >
<Text as="h2" className='title' fontSize={{base:"1.6rem", md:'1.8rem', lg: '2.2rem'}}  color={link}>
{props.title}
</Text>
</Link>
:
<Link href={props.slug.current} >
<Text as="h2" className='title' fontSize={{base:"1.6rem", md:'1.8rem', lg: '2.2rem'}}  color={link}>
{props.title}
</Text>
</Link>
}

<Text as="time" fontSize={{base:"1.6rem", md:'1.8rem', lg: '2rem'}} color={time}>
{dateFormat(Date.parse(props.publishedAt), 'dd.mm.yyyy')}
</Text>
</Box>

<Box 
w={{base:"100%", md: "67%", lg: "67%"}} 
>
    
{page === '/articles' ?
<Link href={`articles/` + props.slug.current}>
<Text className='summary' fontSize={{base:"1.6rem", md:'1.8rem', lg: '2.2rem'}}  color={text} noOfLines={[4,3,4]}>
{props.summary}
<span className='more'>-></span>
</Text>
</Link>
:
<Link href={props.slug.current}>
<Text className='summary' fontSize={{base:"1.6rem", md:'1.8rem', lg: '2.2rem'}}  color={text} noOfLines={[4,3,4]}>
{props.summary}
<span className='more'>-></span>
</Text>
</Link>
}

{page === '/articles' ?
<Link href={`articles/` + props.slug.current}>
<Text className='more' fontSize={{base:"1.4rem", md:'1.6rem', lg: '2rem'}}  color={text} >
 Read More<Icon marginTop={-0.5} as={ArrowForwardIcon} />
</Text>
</Link>
:
<Link href={props.slug.current}>
<Text className='more' fontSize={{base:"1.6rem", md:'1.8rem', lg: '2.2rem'}}  color={text} >
Read More<Icon marginTop={-0.5} as={ArrowForwardIcon} /> 
</Text>  
</Link>
}

</Box>
</Flex>
</Flex>
<Divider />
</Fragment>
)
}

export default Grid;