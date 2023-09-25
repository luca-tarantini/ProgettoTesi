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



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

let x = 50;
let y = 50;

function App() {

  const [color, setColor] = useState(0);
  const [speed1, setSpeed1] = useState(0.5);
  const [speed2, setSpeed2] = useState(0.5);

  useEffect(() => {
    // const inter = setInterval(
    //   () => setColor(color => color + 5), 5
    // );

    // return () => {
    //   clearInterval(inter);
    // }
  },[]);

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

  function handleChange(e) {
      setColor(e.target.value);
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
      <ReactP5Wrapper sketch={sketchStart} color={color} speed1={speed1} speed2={speed2}></ReactP5Wrapper>
      </Grid>
      <Grid item xs>
      <input type="text" placeholder="Nome" name="name" onChange={handleChange} autoComplete="off"/>
      {color}
      <DiscreteSlider speed={speed1} setSpeed={setSpeed1} player={"1"}></DiscreteSlider>
      <DiscreteSlider speed={speed2} setSpeed={setSpeed2} player={"2"}></DiscreteSlider>
      </Grid>
    </Grid>
      
      
      </>
  );
}

export default App;
