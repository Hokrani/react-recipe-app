import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {
  Dialog as MyDialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Typography, CardMedia
} from '@material-ui/core';
import Ingredients from './Ingredients';
import { mealContentStyles } from '../../styles/sharedStyles';
import { cardStyles } from '../../styles/sharedStyles';
import ReactPlayer from "react-player";

function MealContent(props) {
  const classes = mealContentStyles();
  const [scroll, setScroll] = useState('paper');
  const stepsText = props.mealcontent.strInstructions.split(".");


  return (
    <div>
      <DialogTitle disableTypography={true} className={classes.title}  >
        <Typography variant="h4">{props.mealcontent.strMeal}</Typography>
      </DialogTitle>
      <CardMedia
        component="img"
        xs={{ maxHeight: 50 }}
        height="400"
        image={props.mealcontent.strMealThumb}
        alt="green iguana"
      />
      <DialogContent
        dividers={scroll === 'paper'}
        className={classes.dialog}>
        <Typography variant="h5" className={classes.ingredients}>
          How to Make {props.mealcontent.strMeal}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div" style={{ fontWeight: 'bold' }}>
          Step to prepare :
        </Typography>

        {stepsText.map((item, index) => {
          if ((stepsText.length - 1) !== index)
            return (<DialogContentText className={classes.infoText}>
                        {index + 1}.{item}.
                   </DialogContentText>
                   )
        }
        )}



        {/* <DialogContentText
          className={classes.infoText}
        >{props.mealcontent.strInstructions}
        </DialogContentText> */}
        {props.mealcontent.strYoutube && (
          <>
            <Typography variant="h5" className={classes.ingredients}>
              Watch the step by step recipe of {props.mealcontent.strMeal} here: </Typography>
            <ReactPlayer
              width={"100%"}
              height="50vh"
              url={props.mealcontent.strYoutube}
              muted={true}
              playing={true}
              controls={true}
            />
          </>
        )}
        {props.mealcontent && (
          <>
            <Typography variant="h5" className={classes.ingredients}>
              Ingredients of {props.mealcontent.strMeal} here: </Typography>
            <Ingredients meal={props.mealcontent} />
          </>
        )}
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