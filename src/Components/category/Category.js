
import React from 'react'
import Button from '@mui/material/Button';
import './Category.css'
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableBody } from '@mui/material';
import {categories} from '../../constants/data'
import styled from '@emotion/styled';
import { Link, useSearchParams } from 'react-router-dom';

const StyledButton=styled(Button)`
       margin: 20px;
       font-size: 1.5rem;
       background: #6495ed;
       color: white;
       width:85%;
`

const StyledLink=styled(Link)`
   text-decoration: none;
   color:rgb(113, 111, 111);
   &:hover{
    color: #6495ed;
   
    text-decoration: underline;
   
   }
`;

const Category=()=>{

    const [searchParams]=useSearchParams();
    const category=searchParams.get('category');
    console.log("cat>>",searchParams.get('category'));

    return(
        <>
            
            <StyledLink to={`/create?category=${category || ''}`} style={{textDecoration:'none'}}>
            <StyledButton variant='contained'>Create Blog</StyledButton>
            </StyledLink>
            
            <Table className='table'>
                <TableHead className='th'>
                    <TableRow className='tr'>
                        <TableCell className='td'>
                            <StyledLink to='/' >
                               All Category
                            </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='tb'>
                     {
                        categories.map((category)=>{
                            return(
                                <TableRow  className='tr' key={category.id}>
                                  <TableCell className='td'>
                                     <StyledLink to={`/?category=${category.type}`} >
                                       {category.type}
                                     </StyledLink>
                                  </TableCell>
                               </TableRow>
                            )
                        })
                     }
                </TableBody>
            </Table>
        </>
    )
}

export default Category;