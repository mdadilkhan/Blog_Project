import { Grid } from "@mui/material";
import React from "react";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Posts from "./post/Posts";


const Home=()=>{
    return(
        <>
            <Banner/>
            <Grid container>
            
              <Grid container item lg={2} sm={2} xs={12}>
                 <Category/>
              </Grid>

              <Grid container item lg={10} sm={10} xs={12} >
                <Posts />
              </Grid>
            </Grid>
           
        </>
        
    )
}

export default Home;
