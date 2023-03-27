
import React, {useState,useEffect,useContext} from 'react'
import {Link, useParams,useNavigate } from 'react-router-dom';
import {DataContext} from '../../context/DataProvider'
import { API } from '../../service/api';

import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import Comments from './comments/Comments';




const Container = styled(Box)(({ theme }) => ({
  margin: '50px 100px',
  [theme.breakpoints.down('md')]: {
      margin: 0
  },
}));



// const Container = styled(Box)`
//    margin: 20px 100px; 
// `;

const Image=styled('img')({
   width:'100%',
   height: '50vh',
   objectFit: 'cover'



})


const EditIcon = styled(Edit)`
  width:32px;
  height:32px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
  width:32px;
  height:32px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
  word-break: break-word;
`;


// const Author = styled(Box)`
//   color: #878787;
//   margin: 20px 0;
//   display: flex;
// `;

const Description= styled(Typography)`
   word-break: break-word;
`;


const Author = styled(Box)(({ theme }) => ({
  color: '#878787',
  display: 'flex',
  margin: '20px 0',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  },
}));













const DetailView = () => {

  const [post,setPost]=useState({});

  const { id }=useParams();

  const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  
  const { accountContext } = useContext(DataContext);

  const navigate = useNavigate();





  useEffect(()=>{
     const fetchData = async ()=>{
        let response=await API.getPostById(id);
        if(response.isSuccess){
          setPost(response.data);
        }
     }
     fetchData()
  },[])
  

const deleteBlog = async () => {  
    await API.deletePost(post._id);
    navigate('/')
}

  return (
    <Container>
        <Image src={post.picture} alt="blog" />
        <Box style={{float:'right'}}>
        {
          accountContext.username===post.username && 
          <>
            <Link to={`/update/${post._id}`}><EditIcon color='primary' /></Link>
            
            <DeleteIcon color='error'  onClick={()=>{deleteBlog()}}/>
          </>
        }
          
        </Box>
        <Heading>{post.title}</Heading>
        <Author>
          <Typography>Author: <Box component="span" style={{fontWeight:600}} >{post.username}</Box></Typography>
          <Typography style={{marginLeft:'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
        </Author>
        <Description>{post.description}</Description>
        <Comments post={post}/>
    </Container>
  )
}

export default DetailView;
