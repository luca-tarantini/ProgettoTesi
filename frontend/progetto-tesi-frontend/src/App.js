import logo from './logo.svg';
import './App.css';

import {Canvas} from "@react-three/fiber";
import Sketch from "react-p5";
import { useRef, useEffect } from 'react';
import p5 from "p5";

import {ReactP5Wrapper} from "react-p5-wrapper";
import sketchStart from './sketchStart';

import { useState } from 'react';

import DiscreteSlider from './Components/DiscreteSlider';
import { TextField, Button, CardHeader } from '@mui/material';


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { LineChart } from '@mui/x-charts/LineChart';

let x = 50;
let y = 50;

function App() {

  const [color, setColor] = useState(0);
  const [speed1, setSpeed1] = useState(0);
  const [speed2, setSpeed2] = useState(0);

  const [start, setStart] = useState(false);
  const [vincitoreLivello, setVincitoreLivello] = useState(undefined);

  const [values1, setValues1] = useState([]);
  const [values2, setValues2] = useState([]);

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


  

  // const p5Ref = useRef();

  // const Sketch = (p) => {
  //   p.setup = () => {
  //     //p.createCanvas(500, 500);

  //     let cnv = p.createCanvas(window.innerWidth, window.innerHeight);
  //     cnv.mousePressed((event) => {
  //     console.log("Clicked on the canvas. Event:", event)
  // })
  //   };

  //   p.draw = () => {
  //     p.background(0);
  //     p.ellipse(x, y, 70, 70);
  //     if(x !== window.innerWidth-35)
  //       x++;
  //   };
  // };

  // useEffect(() => {
  //   const mp5 = new p5(Sketch, p5Ref.current);
  //   return mp5.remove;
  // }, []);

  // return <div ref={p5Ref}></div>;














  // const setup = (p5, canvasParentRef) => {
  //   p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
  //   p5.colorMode(p5.HSB, 360, 100, 100, 100)
  //   p5.rectMode(p5.CENTER)
  //   p5.noStroke();
  //   //p5.line(15, 25, 70, 90);
  // }

  // const draw = (p5) => {
  //   p5.background(230,30,23);
  //   p5.rect(window.innerWidth/2, window.innerHeight/2, 400, 400, 50)

  //   let ctx = p5.getContext("2d");

  //   let gradient = ctx.createLinearGradient(window.innerWidth/2-200, window.innerHeight/2-200, window.innerWidth/2+200, window.innerHeight/2+200)
  //   gradient.addColorStop(0, "blue")
  //   gradient.addColorStop(1, "red")

  //   ctx.fillStyle = gradient;
  //   // p5.ellipse(x, y, 70, 70);
  //   // if(x !== window.innerWidth)
  //   //   x++;
  //   //let gradient = p5.createLinearGradient()
  // }

  function startStop(){
    setStart(!start);
    setSpeed1(0);
    setSpeed2(0);
    setVincitoreLivello(undefined);
    setValues1([0]);
    setValues2([0]);
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //<Sketch setup={setup} draw={draw}/>

    <>
    <Grid container spacing={3}>
      <Grid item xs="auto">
      {start && <ReactP5Wrapper sketch={sketchStart} color={color} speed1={speed1} speed2={speed2} start={start} setVincitoreLivello={setVincitoreLivello}></ReactP5Wrapper>}
      </Grid>
      <Grid item xs>
        <Button variant="contained" onClick={startStop}>{!start ?  "START" : "STOP"} </Button>
        {/* {vincitoreLivello && <>HA VINTO IL GIOCATORE {vincitoreLivello}</>} */}
        {start && <><Grid id="top-row" container>
                      <DiscreteSlider speed={speed1} setSpeed={setSpeed1} player={"1"}></DiscreteSlider>
                      <LineChart
                        width={400}
                        height={200}
                        series={[
                          { data: values1}
                        ]}

                        sx={{
                          '.MuiLineElement-root': {
                            stroke: '#8884d8',
                            strokeWidth: 2,
                          },
                          '.MuiMarkElement-root': {
                            display: "none"
                          },
                        }}
                      />
                    </Grid>
                    <Grid id="bottom-row" container>
                      <DiscreteSlider speed={speed2} setSpeed={setSpeed2} player={"2"}></DiscreteSlider>
                      <LineChart
                        width={400}
                        height={200}
                        series={[
                          { data: values2}
                        ]}

                        sx={{
                          '.MuiLineElement-root': {
                            stroke: '#000',
                            strokeWidth: 2,
                          },
                          '.MuiMarkElement-root': {
                            display: "none"
                          },
                        }}
                      />
                    </Grid></>}
       </Grid>
    </Grid>
      
      
      </>
  );
}

export default App;



/* <div><TextField label="Colore" onChange={handleChange} /></div>
      {color} */