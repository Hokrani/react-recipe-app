import React from 'react';
import { textStyles } from '../../styles/sharedStyles';
import { Typography } from '@material-ui/core';

function About() {
    const classes = textStyles();

    return (
        <>
            <Typography className={classes.mainText} variant="h4">About Page</Typography>
            <Typography className={classes.infoText} variant="body2">
                Receipe ! A simple web application connected to "TheMealDB" to display recipes by name,
                sub category list and receipe content.
                {/* <Typography className={classes.infoText} variant="body2"> */}
                <p>
                Technology used in this application :
                             React Function and class as a front end technology, 
                             Redux for state management, 
                             Saga for middleware application, 
                             Material UI for design. 
                            {/* </Typography> */}</p>
                 This web application can run on both Desktop and mobile application.
            </Typography>
            <Typography className={classes.infoText} variant="h5">
                If you wish to check some of my other works, 
                head over to my github right <i><a href="https://github.com/Hokrani?tab=repositories">here!</a></i>
            
            </Typography>
        </>
    )
}

export default About;