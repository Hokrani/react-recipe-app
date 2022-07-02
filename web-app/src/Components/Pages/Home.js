import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CategoriesGrid from './CategoriesGrid';
import { textStyles } from '../../assets/styles/sharedStyles';

function Home() {
    const classes = textStyles();

    return (
        <>
            <Grid container>
                <Grid item>
                    <Typography className={classes.mainText} variant="h4">Show Off  Receipe</Typography>
                </Grid>
                <Grid item>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
            <CategoriesGrid/>
        </>
    )
}

export default Home;