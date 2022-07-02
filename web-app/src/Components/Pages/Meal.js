import React from 'react';
import { 
    Card, CardHeader, CardMedia, 
    CardContent, Avatar, Typography  
} from '@material-ui/core';
import { cardStyles } from '../../assets/styles/sharedStyles';


function Meal(props) {
    const classes = cardStyles();
   

    return (
        <Card className={classes.card} onClick={()=>props.handleMeal(props.meal.idMeal)}>
            {/* <CardHeader avatar={
                            <Avatar className={classes.cardAvatar}>
                            Meal Meetup
                            </Avatar>}
                        action={
                            <MealContent meal={props.meal}/>
                        }
            /> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-pot-food" /> */}
        <CardMedia className={classes.cardImg} image={props.meal.strMealThumb} alt={props.meal.strMealThumb}
         />
        <CardContent className={classes.cardContent} >
            <Typography  className={classes.cardOverline}>{props.meal.strMeal} Dish</Typography> 
            {/* <Typography className={classes.cardInfoText}>• Category: {props.category.strCategory}</Typography>      */}
           {/* <Typography className={classes.cardInfoText}>• Description: {props.category.strCategoryDescription}</Typography>             */}
        </CardContent>
        </Card>
    );
}

export default Meal;