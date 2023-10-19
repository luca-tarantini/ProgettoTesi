
import * as React from 'react';


import {ReactP5Wrapper} from "react-p5-wrapper";
import sketchStart from './../sketchStart';

import { useState, useEffect } from 'react';

import { Fab } from '@mui/material';
import Grid from '@mui/material/Grid';

import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

import { LineChart } from '@mui/x-charts/LineChart';

let interv1;
let interv2;

export default function Game(props){

    const [start, setStart] = useState(false);
    const [vincitoreLivello, setVincitoreLivello] = useState(undefined);
    const [speed1, setSpeed1] = useState(0);
    const [speed2, setSpeed2] = useState(0);

    const [values1, setValues1] = useState([]);
    const [values2, setValues2] = useState([]);

    const styleFAB = {
        margin: 0,
        top: 'auto',
        bottom: 20,
        left: 20,
        position: 'fixed',
        backgroundColor: "#fff"
    };

    function startStop(){
        setStart(!start);
        setSpeed1(0);
        setSpeed2(0);
        setVincitoreLivello(undefined);
        // setValues1([0]);
        // setValues2([0]);
      }

      useEffect(() => {
        if(start)
        { interv1 = setInterval(function() {
              setSpeed1(Math.random()*(0.9-0.2)+0.2);
          }, 10);
    
          interv2 = setInterval(function() {
            setSpeed2(Math.random()*(0.9-0.2)+0.2);
        }, 10);
      }
        else
          {
            clearInterval(interv1);
            clearInterval(interv2);
          }
      }, [start]);
    
      useEffect(() => {
        if(values1.length < 10)
          setValues1(values1 => [...values1,speed1])
        else
        {
          values1.shift();
          setValues1(values1 => [...values1,speed1])
        }
      },[speed1]);
    
      useEffect(() => {
        if(values2.length < 10)
          setValues2(values2 => [...values2,speed2])
        else
        {
          values2.shift();
          setValues2(values2 => [...values2,speed2])
        }
      },[speed2]);
    
      

    return(
        <>
        
        </>
    )
}