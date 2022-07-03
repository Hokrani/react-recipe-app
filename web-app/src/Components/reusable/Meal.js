import React from 'react';
import {
    Card, CardMedia,
    CardContent, Typography
} from '@material-ui/core';
import { subMenuCardStyles } from '../../assets/styles/sharedStyles';


function Meal(props) {
    const classes = subMenuCardStyles();
    // sx={{ maxHeight:1  }}
    return (
            // <div  sx={{ maxHeight:4  }}>

            
        <Card className={classes.card} onClick={() => props.handleMeal(props.meal.idMeal)}>
            <CardMedia  className={classes.cardImg} image={props.meal.strMealThumb} alt={props.meal.strMealThumb}
            />
            <CardContent className={classes.cardContent} >
                <Typography className={classes.cardOverline}>{props.meal.strMeal}</Typography>
            </CardContent>
        </Card>
        // </div>
    );
}

export default Meal;