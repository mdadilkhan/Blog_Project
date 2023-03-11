import React from 'react'
import {Box} from '@mui/material';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';


// const Image=styled('img')({
//   width: '100%'
// })
const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: '150px'
});

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;


const Post = ({post}) => {
  console.log("blog post>>",post);
  return (
    <Container>
      <Image src={post.picture} alt="blog" />
      <Text>{post.categories}</Text>
      <Heading>{post.title}</Heading>
      <Text>{post.username}</Text>
      <Details>{post.description}</Details>

    </Container>
  )
}


export default Post;
