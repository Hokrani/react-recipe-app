import React from 'react';
import {
    Card, CardHeader, CardMedia,
    CardContent, Avatar, Typography
} from '@material-ui/core';
import { cardStyles } from '../../assets/styles/sharedStyles';
import Button from '@material-ui/core/Button';


function Meal(props) {
    const classes = cardStyles();


    return (
        <Card className={classes.card} onClick={() => props.handleMeal(props.meal.idMeal)}>
            <CardMedia className={classes.cardImg} image={props.meal.strMealThumb} alt={props.meal.strMealThumb}
            />
            <CardContent className={classes.cardContent} >
                <Typography className={classes.cardOverline}>{props.meal.strMeal} Dish</Typography>
            </CardContent>
        </Card>
    );
}

export default Meal;