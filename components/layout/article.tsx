import React from "react";
import { Flex, Box, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { Card } from "../../lib/types";
import readingTime from 'reading-time'
import dateFormat from 'dateformat'
import { ArrowForwardIcon } from '@chakra-ui/icons';

type Props = {
    props: Card;
}

const Article: React.FC<Props> = ({ props }) => {

const time = useColorModeValue("#6B7280", "#D1D5DB")
const link = useColorModeValue("#111827", "#F3F4F6")
const text = useColorModeValue("#6B7280", "#D1D5DB")

return (

<Flex>
<Box w={1 / 6} py={2} >
<Text as="time" fontSize="0.95rem"  letterSpacing="0.07rem" color={time}>
{dateFormat(Date.parse(props.publishedAt), 'd mmmm, yyyy')}
<br />{' '}
{readingTime(props.intro).text}
</Text>
</Box>

<Box w={5 / 6}>
<Link href={'/blog/' + props.slug.current}>
<a>
<Text as="h2" fontSize="2rem" cursor="pointer" textDecoration="none" color={link}>
{props.title}
</Text>
<Text fontSize="1rem" lineHeight="1.75" color={text} noOfLines={2}>
{props.intro}
</Text>
<Text as="p" fontSize="1.05rem" color={text}>
Read more <Icon marginTop={-0.5} as={ArrowForwardIcon} />
</Text>
</a>
</Link>
</Box>

</Flex>

   
)

}

export default Article