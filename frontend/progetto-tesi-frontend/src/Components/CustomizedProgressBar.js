import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@mui/styles";
import { Card, LinearProgress } from "@mui/material";



// Inspired by the former Facebook spinners.

const useStyles = makeStyles({
  root: {
    height: 200,
    display: "flex",
    padding: 10
  },
  stats: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
});

export default function CustomizedProgressBars(props) {
  const classes = useStyles();
    const [focusColor, setFocusColor] = useState("#1a90ff");

    
  const BorderLinearProgress = withStyles((theme) => {
    return {
      root: {
        borderRadius: 5,
        width: 50,
        height: "100%"
      },
      bar: {
        borderRadius: 5,
        transform: ({ value }) => {
          return `translateY(${value}%) !important`;
        },
        backgroundColor: props.focusColor
      }
    };
  })(LinearProgress);

  return (
    <Card className={classes.root} sx={{ justifyContent:"center", margin:"auto", marginRight:"5vh", marginLeft:"5vh"}}>
      <div className={classes.stats}>
        <BorderLinearProgress variant="determinate" value={100-(props.focus*100)} />
        {/* <div><b>{props.player}</b></div> */}
      </div>
    </Card>
  );
}
