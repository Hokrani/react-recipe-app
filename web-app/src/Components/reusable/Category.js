import React, { useRef, useEffect } from 'react';
import {
    Card, CardHeader, CardMedia,
    CardContent, Avatar, Typography
} from '@material-ui/core';
import { cardStyles } from '../../assets/styles/sharedStyles';


const Category = (props) => {
    const classes = cardStyles();
    const myRef = useRef(null)
    const scrollToRef = (ref) => window.scrollTo(0, 0)
    useEffect(() => {
        scrollToRef(myRef);
    }, [])

    return (
        <div ref={myRef}>
            <Card className={classes.card} onClick={() => props.handleCategory(props.category.strCategory)}>
                <CardMedia className={classes.cardImg} image={props.category.strCategoryThumb} alt={props.category.strCategoryThumb}
                />
                <CardContent className={classes.cardContent} >
                    <Typography className={classes.cardOverline}>{props.category.strCategory}</Typography>
                    <Typography className={classes.cardInfoText}> {props.category.strCategoryDescription}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Category;