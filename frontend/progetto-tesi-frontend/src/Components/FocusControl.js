import React from "react";
import { makeStyles, withStyles } from "@mui/styles";
import { Card, LinearProgress } from "@mui/material";

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

export default function FocusControl(props) {
  const classes = useStyles();

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
      </div>
    </Card>
  );
}
