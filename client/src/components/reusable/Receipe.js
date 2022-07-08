import React from 'react';
import {
    Card, CardMedia,
    CardContent, Typography
} from '@material-ui/core';
import { subMenuCardStyles } from '../../styles/sharedStyles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

/**
 * This is component to display receipe in card formate. 
 */
const Receipe = (props) => {
    const classes = subMenuCardStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const cardContent = () => {
        return (
            <>
                <Button
                    className={classes.dialogBtn}
                    size="small"
                    onClick={() => props.handleReceipe(props.receipe.idMeal)}
                >
                    More...
                </Button>
                <CardMedia
                    className={classes.cardImg}
                    image={props.receipe.strMealThumb}
                    alt={props.receipe.strMealThumb}
                />
                <CardContent className={classes.cardContent} >
                    <Typography
                        className={classes.cardOverline}
                    >
                        {props.receipe.strMeal}
                    </Typography>
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

export default Receipe;