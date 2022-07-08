import React from 'react';
import { Container as MyContainer } from '@material-ui/core';
import { containerStyles } from '../styles/sharedStyles';

const Container=(props)=>{
    const classes = containerStyles();

    return (
        <MyContainer className={classes.container}>
            {props.children}
        </MyContainer>
    );
}

export default Container;