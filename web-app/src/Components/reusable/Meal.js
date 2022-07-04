import React from 'react';
import {
    Card, CardMedia,
    CardContent, Typography
} from '@material-ui/core';
import { subMenuCardStyles } from '../../styles/sharedStyles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const Meal = (props) => {
    const classes = subMenuCardStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const cardContent = () => {
        return (
            <>
                <Button className={classes.dialogBtn} size="small" onClick={() => props.handleMeal(props.meal.idMeal)}>More...</Button>
                <CardMedia className={classes.cardImg} image={props.meal.strMealThumb} alt={props.meal.strMealThumb}
                />
                <CardContent className={classes.cardContent} >
                    <Typography className={classes.cardOverline}>{props.meal.strMeal}</Typography>
                </CardContent>
            </>
        )
    }
    return (
        <>
            {isMobile ?
                <Card className={classes.mobilecard} >                  
                    {cardContent()}
                </Card>
                : <Card className={classes.card} >
                    {cardContent()}
                </Card>}
           
        </>
    );
}

export default Meal;