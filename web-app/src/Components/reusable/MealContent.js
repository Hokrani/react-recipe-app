import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {
  Dialog as MyDialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Typography, CardMedia
} from '@material-ui/core';
import Ingredients from '../Ingredients';
import { dialogStyles } from '../../assets/styles/sharedStyles';
import { cardStyles } from '../../assets/styles/sharedStyles';
import ReactPlayer from "react-player";

function MealContent(props) {
  const classes = dialogStyles();
  const classescard = cardStyles();
  const [scroll, setScroll] = useState('paper');


  return (
    <div>

      <DialogTitle disableTypography={true} className={classes.dialogTitle}>
        <Typography variant="h4">How to make: {props.mealcontent.strMeal}</Typography>
        {/* <span style={{ float: 'right' }}>
          <Button
            variant="contained"
            onClick={props.handleClose}
          >
            Back
          </Button>
        </span> */}
      </DialogTitle>

      <CardMedia className={classescard.cardImg} image={props.mealcontent.strMealThumb} alt={props.mealcontent.strMealThumb} />

      <DialogContent
        dividers={scroll === 'paper'}
        className={classes.dialog}>
        <Typography variant="h5" className={classes.dialogIngredients}>Process</Typography>
        <DialogContentText
          className={classes.dialogInfoText}
        >{props.mealcontent.strInstructions}
        </DialogContentText>
        <Typography variant="h5" className={classes.dialogIngredients}>Video</Typography>
        <ReactPlayer
          width={"100%"}
          height="80vh"
          url={props.mealcontent.strYoutube}
          muted={true}
          playing={true}
        />
        <Ingredients meal={props.mealcontent} />
      </DialogContent>

      <DialogActions className={classes.dialogAction}>
        <Button
          variant="contained"
          onClick={props.handleClose}
        >
          Back
        </Button>
      </DialogActions>
      {/* </MyDialog> */}
    </div>
  );
}

export default MealContent;