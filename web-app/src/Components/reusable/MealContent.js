import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {
  Dialog as MyDialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Typography, CardMedia
} from '@material-ui/core';
import Ingredients from '../../Components/reusable/Ingredients';
import { mealContentStyles } from '../../assets/styles/sharedStyles';
import { cardStyles } from '../../assets/styles/sharedStyles';
import ReactPlayer from "react-player";

function MealContent(props) {
  const classes = mealContentStyles();
  const [scroll, setScroll] = useState('paper');


  return (
    <div>

      <DialogTitle disableTypography={true} className={classes.title}  >
        <Typography variant="h4">How to make: {props.mealcontent.strMeal}</Typography>       
      </DialogTitle>

      {/* <CardMedia sx={{ maxWidth: 300 }} paddingTop="100%" height="140" image={props.mealcontent.strMealThumb} alt={props.mealcontent.strMealThumb} /> */}
      
      <CardMedia
        component="img"
        xs={{ maxHeight: 50 }}
        height="400"
        image={props.mealcontent.strMealThumb}
        alt="green iguana"
      />
      {/* className={classes.cardImg} */}
      <DialogContent
        dividers={scroll === 'paper'}
        className={classes.dialog}>
        <Typography variant="h5" className={classes.ingredients}>How to Prepare: </Typography>
        <DialogContentText
          className={classes.infoText}
        >{props.mealcontent.strInstructions}
        </DialogContentText>
        <Typography variant="h5" className={classes.ingredients}>Watch </Typography>
        <ReactPlayer
          width={"100%"}
          height="80vh"
          url={props.mealcontent.strYoutube}
          muted={true}
          playing={true}
          controls={true}
        />
        <Ingredients meal={props.mealcontent} />
      </DialogContent>

      <DialogActions className={classes.action}>
        <Button
          variant="contained"
          onClick={props.handleClose}
        >
          Back
        </Button>
      </DialogActions>
    </div>
  );
}

export default MealContent;