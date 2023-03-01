
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
import { Link } from 'react-router-dom';

const StyledButton=styled(Button)`
       margin: 20px;
       font-size: 1.5rem;
       background: #6495ed;
       color: white;
       width:85%;
`



const Category=()=>{
    return(
        <>
            <Link to='/create' style={{textDecoration:'none'}}>
            <StyledButton variant='contained'>Create Blog</StyledButton>
            </Link>
            
            <Table className='table'>
                <TableHead className='th'>
                    <TableRow className='tr'>
                        <TableCell className='td'>
                            All Category
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='tb'>
                     {
                        categories.map((category)=>{
                            return(
                                <TableRow  className='tr' key={category.id}>
                                  <TableCell className='td'>
                                     {category.type}
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