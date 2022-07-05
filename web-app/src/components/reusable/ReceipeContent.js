import React from 'react';
import Button from '@material-ui/core/Button';
import {
  DialogActions, DialogContent,
  DialogContentText, DialogTitle, Typography, CardMedia
} from '@material-ui/core';
import Ingredients from './Ingredients';
import { receipeContentStyles } from '../../styles/sharedStyles';
import ReactPlayer from "react-player";

function ReceipeContent(props) {
  const classes = receipeContentStyles();
  const scroll = 'paper';
  const stepsText = props.receipeContent.strInstructions.split(".");


  return (
    <div>
      <DialogTitle disableTypography={true} className={classes.title}  >
        <Typography variant="h4">
          {props.receipeContent.strMeal}
        </Typography>
      </DialogTitle>
      <CardMedia
        component="img"
        xs={{ maxHeight: 50 }}
        height="400"
        image={props.receipeContent.strMealThumb}
        alt="green iguana"
      />
      <DialogContent
        dividers={scroll === 'paper'}
        className={classes.dialog}>
        <Typography variant="h5" className={classes.ingredients}>
          How to Make {props.receipeContent.strMeal}
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom component="div"
          style={{ fontWeight: 'bold' }}
        >
          Step to prepare :
        </Typography>

        {stepsText.map((item, index) => {
          if ((stepsText.length - 1) !== index) {
            return (
              <DialogContentText className={classes.infoText}>
                {index + 1}.{item}.
              </DialogContentText>
            )
          }
          return null;
        }
        )}
        {props.receipeContent.strYoutube && (
          <>
            <Typography variant="h5" className={classes.ingredients}>
              Watch the step by step recipe of {props.receipeContent.strMeal} here:
            </Typography>
            <ReactPlayer
              width={"100%"}
              height="50vh"
              url={props.receipeContent.strYoutube}
              muted={true}
              playing={true}
              controls={true}
            />
          </>
        )}
        {props.receipeContent && (
          <>
            <Typography variant="h5" className={classes.ingredients}>
              Ingredients of {props.receipeContent.strMeal} here:
            </Typography>
            <Ingredients receipe={props.receipeContent} />
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

export default ReceipeContent;