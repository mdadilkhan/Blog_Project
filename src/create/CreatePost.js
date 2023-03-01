import styled from '@emotion/styled'
import {FormControl, InputBase, Button, TextareaAutosize} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';


const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
const Container=styled(Box)`
   margin: 0 90px; 
`;
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

const CreatePost = () => {
  return (
        <Container>
            <Image src={url} alt="banner" />
            <StyledFormControl>
                <label htmlFor="fileInput"><AddCircleIcon fontSize='large' color='action' /></label>
                <input type="file" name="" id="fileInput" style={{display:'none'}}/>

                <InputTextField placeholder='Title'/>
                <Button variant='contained'>Publish</Button>
            </StyledFormControl>
            <TextArea
                minRows={5}
                placeholder='Tell your story....'
            />
        </Container>
  )
}

export default CreatePost