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
  
const Essays: React.FC<Props> = ({ props }) => {

const router = useRouter();
const page = router.asPath;
const time = useColorModeValue("#6B7280", "#D1D5DB")
const link = useColorModeValue("#111827", "#F3F4F6")
const text = useColorModeValue("#6B7280", "#D1D5DB")

return (
<Fragment>
<Flex py={6} w="full" alignItems="center" justifyContent="center">
<Flex>
<Box  w={1/4} >
<Text as="time" fontSize="1rem" lineHeight="3rem" letterSpacing="0.07rem" color={time}>
{dateFormat(Date.parse(props.publishedAt), 'd mmmm, yyyy')}
</Text>
</Box>

<Box w={3/4}>
    
{page === '/essays' ?
<Link href={'essays/' + props.slug.current} >
<Text as="h2" fontSize="2rem" cursor="pointer" textDecoration="none" color={link}>
{props.title}
</Text>
</Link>
:
<Link href={props.slug.current} >
<Text as="h2" fontSize="2rem" cursor="pointer" textDecoration="none" color={link}>
{props.title}
</Text>
</Link>
}

<Text fontSize="1rem" lineHeight="1.75" color={text} noOfLines={5}>
{props.summary}
</Text>

{page === '/essays' ?
<Link href={`essays/` + props.slug.current}>
<Text as="p" fontSize="1.05rem" color={text} cursor="pointer">
Read more <Icon marginTop={-0.5} as={ArrowForwardIcon} />
</Text>
</Link>
:
<Link href={props.slug.current}>
<Text as="p" p={0} fontSize="1.05rem" fontWeight="500" color={text} cursor="pointer">
Read more <Icon marginTop={-0.5} as={ArrowForwardIcon} />
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

export default Essays;