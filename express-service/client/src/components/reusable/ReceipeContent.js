import React from 'react';
import Button from '@material-ui/core/Button';
import {
  DialogActions, DialogContent,
  DialogContentText, DialogTitle, Typography, CardMedia
} from '@material-ui/core';
import Ingredients from './Ingredients';
import { receipeContentStyles } from '../../styles/sharedStyles';
import ReactPlayer from "react-player";
import Link from '@mui/material/Link';

function ReceipeContent(props) {
  const classes = receipeContentStyles();
  const scroll = 'paper';
  const stepsText = props.receipeContent.strInstructions.split("\n" || ".");
  let flagForSteps = false;
  let counter = 0;
  if (stepsText[0].indexOf('Steps') > 1)
    flagForSteps = true;

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
          if ((stepsText.length - 1) !== index && item.length > 1) {
            if (flagForSteps) {
              return (
                <DialogContentText className={classes.infoText}>
                  {item}
                </DialogContentText>
              )
            } else{
              counter++;
              return (
                <DialogContentText className={classes.infoText}>
                  {counter}.{item}
                </DialogContentText>
              )
            }
          } else if(stepsText) 
            return (<DialogContentText className={classes.infoText}>
              {item}
            </DialogContentText>)
          
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
      {props.receipeContent.strSource &&
        <Typography variant="caption">
          Source of above information from
          <Link href={props.receipeContent.strSource}> {props.receipeContent.strSource} </Link>
        </Typography>
      }


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