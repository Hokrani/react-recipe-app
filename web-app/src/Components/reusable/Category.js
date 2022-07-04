import React, { useRef, useEffect, useState } from 'react';
import {
    Card, CardHeader, CardMedia,
    CardContent, Avatar, Typography
} from '@material-ui/core';
import { cardStyles } from '../../styles/sharedStyles';
import ShowMoreText from "react-show-more-text";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Button from '@material-ui/core/Button';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";


const Category = (props) => {
    const classes = cardStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const myRef = useRef(null)
    const [expand, setExpand] = useState(false);
    const clickExpand = () => {
        setExpand(!expand);
    };
    const scrollToRef = (ref) => window.scrollTo(0, 0)
    useEffect(() => {
        scrollToRef(myRef);
    }, [])

    return (
        <div ref={myRef}>

            {/* <Button className={classes.dialogBtn} size="small" onClick={handleClickOpen('paper')}>More...</Button> */}

            <Card className={classes.card} >
                {/* <CardHeader avatar={
                    <Avatar className={classes.cardAvatar}>
                        Receipt
                    </Avatar>}
                    
                /> */}
                  <Button className={classes.dialogBtn} size="small" onClick={() => props.handleCategory(props.category.strCategory)}>More...</Button>
          
                { /*</Card>/ </div>onClick={() => props.handleCategory(props.category.strCategory)}> */}
                <CardMedia className={classes.cardImg} image={props.category.strCategoryThumb} alt={props.category.strCategoryThumb}
                />
                <CardContent className={classes.cardContent} >
                    <Typography className={classes.cardOverline}>{props.category.strCategory}</Typography>
                    {/* <Typography className={classes.cardInfoText}> {props.category.strCategoryDescription}</Typography> */}
                    <ShowMoreText
                        lines={isMobile?4:2}
                        more={<ExpandMore />}
                        less={<ExpandLess />}
                        onClick={clickExpand}
                        expanded={expand}
                    // width={10}
                    >
                        {props.category.strCategoryDescription}
                    </ShowMoreText>
                </CardContent>
            </Card>
        </div>
    );
}

export default Category;