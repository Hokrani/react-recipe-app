import React from 'react';
import { 
    Card, CardHeader, CardMedia, 
    CardContent, Avatar, Typography  
} from '@material-ui/core';
import { cardStyles } from '../../assets/styles/sharedStyles';


function Category(props) {
    const classes = cardStyles();
   

    return (
        <Card className={classes.card} onClick={()=>props.handleCategory(props.category.strCategory)}>
            {/* <CardHeader avatar={
                            <Avatar className={classes.cardAvatar}>
                            Meal Meetup
                            </Avatar>}
                        action={
                            <MealContent meal={props.meal}/>
                        }
            /> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-pot-food" /> */}
        <CardMedia className={classes.cardImg} image={props.category.strCategoryThumb} alt={props.category.strCategoryThumb}
         />
        <CardContent className={classes.cardContent} >
            <Typography  className={classes.cardOverline}>{props.category.strCategory} Dish</Typography> 
            <Typography className={classes.cardInfoText}>• Category: {props.category.strCategory}</Typography>     
           <Typography className={classes.cardInfoText}>• Description: {props.category.strCategoryDescription}</Typography>            
        </CardContent>
        </Card>
    );
}

export default Category;