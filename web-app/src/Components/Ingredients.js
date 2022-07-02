import React from 'react';
import {  Typography, Divider } from '@material-ui/core';
import { dialogStyles } from '../assets/styles/sharedStyles';

function Ingredients(props) {
    const classes = dialogStyles();

    let ingredients = []
    let measures = []
    
    // Convert json to array and slice array for ingredients and measures, 
    // then loop over them to remove null values
    Object.keys(props.meal).map((key) => props.meal[key]).slice(9, 29).forEach((item, index) => {
      if(item) {
        ingredients.push(item)
        measures.push(Object.keys(props.meal).map((key) => props.meal[key]).slice(29, 49)[index])
      }
    })
    // Add table for displaying ingredients
    return (
        <div className={classes.dialogInfoText}>
            <Divider />
            <Typography variant="h5" className={classes.dialogIngredients}>Ingredients</Typography>
                {ingredients.map((item, index) => {
                    return (
                        <Typography key={index} className={classes.dialogText}>
                            <b>Ingredient: </b>{item} <b>| Measure:</b> {measures[index]} 
                        </Typography>
                    )
                })}
        </div>
    )
};

export default Ingredients;