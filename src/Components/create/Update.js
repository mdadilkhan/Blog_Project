import styled from '@emotion/styled'
import {FormControl, InputBase, Button, TextareaAutosize} from '@mui/material'
import { Box } from '@mui/system'
import React,{useEffect, useState,useContext} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useLocation,useNavigate, useParams } from 'react-router-dom';
import {DataContext} from '../../context/DataProvider' 
import { API } from '../../service/api';

// styled css
const Container=styled(Box)`
   margin: 0 90px; 
`;

// const Container = styled(Box)(({ theme }) => ({
//   margin: '50px 100px',
//   [theme.breakpoints.down('md')]: {
//       margin: 0
//   },
// }));


const Image=styled('img')({
   width:'100%',
   height:'40vh',
   objectFit:'cover'
})


const StyledFormControl=styled(FormControl)`
      margin-top: 10px;
      display: flex;
      flex-direction:row;
`;

const InputTextField=styled(InputBase)`
      flex: 1;
      margin: 0 30px;
      font-size: 2.5rem;
`

const TextArea=styled(TextareaAutosize)`
    width: 100%;
    margin-top: 50px;
    font-size: 1.8rem;
    border: none;
    &:focus-visible{
        outline: none;
    }

`


//api object 
const intitalPost={
    title:"",
    description:"",
    picture:"",
    username:"",
    categories:"",
    createdDate:new Date()
}




const Update = () => {

//state defined
const [post,setPost]=useState(intitalPost);
const [file,setFile]=useState('');
const url=post.picture? post.picture :'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

//in location there is search property which contains string of url u need to split the string based on your requirement
const location=useLocation();
const navigate=useNavigate();


const {accountContext}=useContext(DataContext);


const {id}=useParams();

useEffect(()=>{
   const fetchData=async()=>{
    let response=await API.getPostById(id);
    if(response.isSuccess){
      setPost(response.data);
    }
   }
   fetchData();
},[])

//useffect define
useEffect(()=>{
  const getImage= async ()=>{
    if(file){
        const data=new FormData()
        data.append("name",file.name);
        data.append("file",file);
       
          //API call
        const response = await API.uploadFile(data)

       
        post.picture=response.data //To do 
        //in this actual picture will not go url will go  
        
    }
  }
  getImage();
  post.categories=location.search?.split('=')[1] || 'All';
  post.username=accountContext.username;

},[file])


const handleChange=(e)=>{
   setPost({...post,[e.target.name]:e.target.value})
}
const updateBlogPost= async()=>{
      let response = await API.updatePost(post);
      if(response.isSuccess){
        navigate(`/details/${id}`);
      }
}




  return (
        <Container>
            <Image src={url} alt="banner" />

             
            <StyledFormControl>
                <label htmlFor="fileInput"><AddCircleIcon fontSize='large' color='action' /></label>
                <input 
                  type="file" 
                  name="" 
                  id="fileInput" 
                  style={{display:'none'}}  
                  onChange={(e)=>{setFile(e.target.files[0])}}  
                  

                />

                <InputTextField placeholder='Title' value={post.title} onChange={(e)=>{handleChange(e)}} name='title' />
                <Button variant='contained' onClick={()=>updateBlogPost()}>Update</Button>
            </StyledFormControl>



            <TextArea
                minRows={5}
                placeholder='Tell your story....'
                name='description'
                onChange={(e)=>{handleChange(e)}}
                value={post.description}
            />
        </Container>
  )
}

export default Update;