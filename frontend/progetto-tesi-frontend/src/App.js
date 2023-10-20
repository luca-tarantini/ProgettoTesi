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
import { TextField, Button, CardHeader, FormGroup, FormLabel, OutlinedInput, Fab, List } from '@mui/material';

import * as React from 'react';
import { styled, makeStyles } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

import { LineChart } from '@mui/x-charts/LineChart';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import ResponsiveAppBar from './Components/AppBar';

import Game from './Pages/Game';

import CustomizedDialogs from './Components/CustomizedDialogs';
import DataTable from './Components/DataTable';


let x = 50;
let y = 50;

let interv1;
let interv2;


function App() {


  

  const [giocatore1, setGiocatore1] = useState("");
  const [giocatore2, setGiocatore2] = useState("");

  const [newGame, setNewGame] = useState(false);

  const [startNewGame, setStartNewGame] = useState(false);

  const [dashboard, setDashboard] = useState(true);

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


  

  const theme = createTheme({
    palette: {
      primary:{
        main: '#1B0B54',
        contrastText: "#fff"
      },
      celeste: {
        main: '#00FFFC',
        contrastText: '#1B0B54'
      },
      white: {
        main: "#fff",
        contrastText: '#1B0B54'
      }
    }
  });

  const options = {
    shouldForwardProp: (prop) => prop !== 'fontColor',
  };

  const CSSTextField = styled(TextField, options)(({ fontColor }) => ({
    input: {
      color: fontColor,
    }
  }),
  
  {
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
      color: "#fff"
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
        color: "#fff"
      },
      '&:hover fieldset': {
        borderColor: '#fff',
        color: "#fff"
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
        color: "#fff"
      },
      '& ::placeholder': {
        color: " #fff"
      }
    },
  });
    
    

  

  const [color, setColor] = useState(0);


  const [logged, setLogged] = useState(false);
  

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

  function login(){
    setLogged(true);
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
    <ThemeProvider theme={theme}>
    {!logged && 
    
    <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
          sx ={{
            backgroundColor: "#1B0B54"
          }}
          >

          <Box
            component="img"
            src="./assets/Logo.png"
          />

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">

              <CSSTextField required id="outlined-basic" label="Username" InputLabelProps={{style: { color: '#fff' }}} variant="outlined" autoComplete="off" fontColor="white"/>
              <CSSTextField required id="outlined-basic" label="Password" InputLabelProps={{style: { color: '#fff' }}} variant="outlined" type="password" autoComplete="off" fontColor="white"/>
            
          </Box>

        <Button 
        variant="contained" 
        onClick={login}
        color='celeste'
        >LOGIN
        </Button>



    </Grid>}
    
    {logged && 
    <>

        <ResponsiveAppBar setNewGame={setNewGame} setStartNewGame={setStartNewGame}></ResponsiveAppBar>

      <CustomizedDialogs open={newGame} setOpen={setNewGame} setStartNewGame={setStartNewGame} 
      giocatore1={giocatore1} 
      setGiocatore1={setGiocatore1}
      giocatore2={giocatore2} 
      setGiocatore2={setGiocatore2}></CustomizedDialogs>

        {/* <Game></Game> */}

        { startNewGame && 
        
        <Grid container >
            <Fab variant="extended" style={styleFAB} onClick={startStop} size="medium" placement="bottom-start">
                {!start ? 
                    <> <PlayCircleFilledWhiteIcon></PlayCircleFilledWhiteIcon> START </> : 
                    <> <PauseCircleFilledIcon></PauseCircleFilledIcon> PAUSE </>}
            </Fab>

            <Grid item xs="auto">
                <ReactP5Wrapper sketch={sketchStart} speed1={speed1} speed2={speed2} start={start} setStart={setStart} setVincitoreLivello={setVincitoreLivello}></ReactP5Wrapper>
            </Grid>
            <Grid item xs>
                {/* {vincitoreLivello && <>HA VINTO IL GIOCATORE {vincitoreLivello}</>} */}
                <Grid id="top-row" 
                    container
                    style={{ minHeight: '46vh' , overflow: 'auto'}}
                    sx ={{ backgroundColor: "#a59bcc"
                    }}>
                    {/* <DiscreteSlider speed={speed1} setSpeed={setSpeed1} player={"1"}></DiscreteSlider> */}
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
                    <Grid id="bottom-row" 
                        container
                        style={{ minHeight: '46vh'}}
                        sx ={{
                            backgroundColor: "#7e769c"
                        }}>

                            {/* <DiscreteSlider speed={speed2} setSpeed={setSpeed2} player={"2"}></DiscreteSlider> */}
                            
                            
                            

                            <Box maxWidth="sm" style={{maxHeight: "46vh", maxWidth:"100%", width:"auto", overflow: 'auto', background:"none", border:"none"}}>
                              <List>
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
                              </List>
                            </Box>

                            
                    </Grid>
            </Grid>
        </Grid>
        }

        {dashboard && 
        <>
        <DataTable></DataTable>
        </>}

    </>}

    </ThemeProvider>
      </>
  );
}

export default App;



/* <div><TextField label="Colore" onChange={handleChange} /></div>
      {color} */