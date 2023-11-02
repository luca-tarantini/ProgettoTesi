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
import { TextField, Button, CardHeader, FormGroup, FormLabel, OutlinedInput, Fab, List, Divider } from '@mui/material';

import Typography from '@mui/material/Typography';

import * as React from 'react';
import { styled, makeStyles, withStyles } from '@mui/material/styles';
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

import OSC from "osc-js";
import CustomizedProgressBars from './Components/CustomizedProgressBar';
import AlertDialog from './Components/AlertDialog';
import CustomizedDialogsFinish from './Components/CustomizedDialogsFinish';

import { giocatoris } from './giocatori';

let x = 50;
let y = 50;

let interv1;
let interv2;

let crono;


function App() {

 const osc = new OSC();

 const [giocatori, setGiocatori] = useState([]);

 const [alertFinishGame, setAlertFinishGame] = useState(false);

  const [giocatore1, setGiocatore1] = useState(undefined);
  const [giocatore2, setGiocatore2] = useState(undefined);

  const [newGame, setNewGame] = useState(false);

  const [startNewGame, setStartNewGame] = useState(false);

  const [dashboard, setDashboard] = useState(true);

  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);

    const [vincitoreLivello, setVincitoreLivello] = useState(undefined);
    const [nomeVincitore, setNomeVincitore] = useState(undefined);
    const [speed1, setSpeed1] = useState(0);
    const [speed2, setSpeed2] = useState(0);

    const [values1, setValues1] = useState([]);
    const [values2, setValues2] = useState([]);

    const [focusColor1, setFocusColor1] = useState("#1a90ff");
    const [focusColor2, setFocusColor2] = useState("#1a90ff");

    const [hh, setHh] = useState(0);
    const [mm, setMm] = useState(0);
    const [ss, setSs] = useState(0);

    const [percorso, setPercorso] = useState("");

    const [nGiri, setNGiri] = useState(3);

    const [visGrafico, setVisGrafico] = useState(true);
    const [salvDati, setSalvDati] = useState(true);

    const styleFAB = {
        margin: 0,
        top: 'auto',
        bottom: 20,
        left: 20,
        position: 'fixed',
        backgroundColor: "#fff"
    };

    const chartsParams = {
      margin: { bottom: 20, left: 25, right: 5 },
      height: 250
    };

    function startStop(){
      setStart(!start);
    }

    function avviaNuovoGioco(){
      setDashboard(true);
      setStart(false);
      setGiocatore1(undefined);
      setGiocatore2(undefined);
      setNomeVincitore(undefined);
      setVincitoreLivello(undefined);
      setStartNewGame(false);
      setSpeed1(0);
      setSpeed2(0);
      setValues1([0]);
      setValues2([0]);
      setVisGrafico(true);
      setSalvDati(true); 
      setNGiri(3);
      setPercorso(undefined);
      setNewGame(true);  
    }
    
    function resettaGioco(){
      setDashboard(true);
      setStart(false);
      setGiocatore1(undefined);
      setGiocatore2(undefined);
      setNomeVincitore(undefined);
      setVincitoreLivello(undefined);
      setStartNewGame(false);
      setSpeed1(0);
      setSpeed2(0);
      setValues1([0]);
      setValues2([0]);   
      setVisGrafico(true);
      setSalvDati(true); 
      setNGiri(3);
      setPercorso(undefined);
    }

    


    useEffect(() => {
      if (ss === 59) {
        setSs(0);
        setMm(mm => mm+1);
    
        if (mm === 59) {
          setMm(0);
          setHh(hh => hh+1);
        }
      }
    },[ss,mm,hh]);

    
      useEffect(() => {
        if(start)
        { interv1 = setInterval(function() {
              setSpeed1(Math.random()*(0.9-0.2)+0.2);
          }, 50);
    
          interv2 = setInterval(function() {
            setSpeed2(Math.random()*(0.9-0.2)+0.2);
        }, 50);

        crono = setInterval(function() {
          setSs(ss => ss+1);
        }, 1000);
      }
        else
          {
            clearInterval(interv1);
            clearInterval(interv2);
            clearInterval(crono);
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

        if(speed1 >= 0 && speed1 < 0.3)
            setFocusColor1("#f52e14");
        else if (speed1 >= 0.3 && speed1 < 0.6)
            setFocusColor1("#f5bc14");
        else
            setFocusColor1("#50f514");

      },[speed1]);
    
      useEffect(() => {
        if(values2.length < 10)
          setValues2(values2 => [...values2,speed2])
        else
        {
          values2.shift();
          setValues2(values2 => [...values2,speed2])
        }

        if(speed2 >= 0 && speed2 < 0.3)
            setFocusColor2("#f52e14");
        else if (speed2 >= 0.3 && speed2 < 0.6)
            setFocusColor2("#f5bc14");
        else
            setFocusColor2("#50f514");
      },[speed2]);


      useEffect(() => {
        if(vincitoreLivello === "1")
          setNomeVincitore(giocatore1);
        else if(vincitoreLivello === "2")
          setNomeVincitore(giocatore2);
      }, [vincitoreLivello]);


  

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
  
   

  
  function stopCrono() {
    clearInterval(crono);
    setHh(0);
    setMm(0);
    setSs(0);
  }
  
 

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

              <CSSTextField required id="outlined-username" label="Username" InputLabelProps={{style: { color: '#fff' }}} variant="outlined" autoComplete="off" fontColor="white"/>
              <CSSTextField required id="outlined-password" label="Password" InputLabelProps={{style: { color: '#fff' }}} variant="outlined" type="password" autoComplete="off" fontColor="white"/>
            
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

        <ResponsiveAppBar 
        alertFinishGame={alertFinishGame} 
        setAlertFinishGame={setAlertFinishGame} 
        newGame={newGame}
        setNewGame={setNewGame} 
        startNewGame={startNewGame}
        setStartNewGame={setStartNewGame} 
        dashboard={dashboard}
        setDashboard={setDashboard}
        avviaNuovoGioco={avviaNuovoGioco}
        resettaGioco={resettaGioco}
        stopCrono={stopCrono}>
          
        </ResponsiveAppBar>

      <CustomizedDialogs open={newGame} setOpen={setNewGame} setStartNewGame={setStartNewGame} 
      giocatore1={giocatore1} 
      setGiocatore1={setGiocatore1}
      giocatore2={giocatore2} 
      setGiocatore2={setGiocatore2}
      setDashboard={setDashboard}
      percorso={percorso}
      setPercorso={setPercorso}
      nGiri={nGiri}
      setNGiri={setNGiri}
      visGrafico={visGrafico}
      setVisGrafico={setVisGrafico}
      salvDati={salvDati}
      setSalvDati={setSalvDati}>
      </CustomizedDialogs>

      <CustomizedDialogsFinish 
      open={finish} 
      setOpen={setFinish} 
      nomeVincitore={nomeVincitore}
      avviaNuovoGioco={avviaNuovoGioco}
      giocatore1={giocatore1}
      giocatore2={giocatore2}
      resettaGioco={resettaGioco}
      giocatori={giocatori}
      setGiocatori={setGiocatori}
      stopCrono={stopCrono}
      ss={ss}
      mm={mm}
      hh={hh}
      percorso={percorso}
      salvDati={salvDati}>
        
      </CustomizedDialogsFinish>

        {/* <Game></Game> */}

        { startNewGame && 
        
        <Grid container >
            <Fab variant="extended" style={styleFAB} onClick={startStop} size="medium" placement="bottom-start">
                {!start ? 
                    <> <PlayCircleFilledWhiteIcon></PlayCircleFilledWhiteIcon> START </> : 
                    <> <PauseCircleFilledIcon></PauseCircleFilledIcon> PAUSE </>}
            </Fab>

            <Grid item xs="auto">
                <ReactP5Wrapper 
                sketch={sketchStart} 
                speed1={speed1} 
                speed2={speed2} 
                start={start} 
                setStart={setStart}
                setVincitoreLivello={setVincitoreLivello}
                giocatore1={giocatore1}
                giocatore2={giocatore2}
                finish={finish}
                setFinish={setFinish}
                percorso={percorso}
                nGiri={nGiri}></ReactP5Wrapper>
            </Grid>
            <Grid item xs>
                {/* {vincitoreLivello && <>HA VINTO IL GIOCATORE {vincitoreLivello}</>} */}
                <Typography variant="h6" style={{ textAlign:"center", width:"100%"}}>
                <Box
                      component="img"
                      src="./assets/1.png"
                      height={30}
                      sx={{marginRight:2}}
                    />
                    {giocatore1}</Typography>
                <Grid id="top-row" 
                    container
                    style={{ minHeight: '40vh' , overflow: 'auto', paddingRight: 20, paddingLeft: 20}}
                    wrap='nowrap'
                    // sx ={{ backgroundColor: "#a59bcc"}}
                    >
                    {/* <DiscreteSlider speed={speed1} setSpeed={setSpeed1} player={"1"}></DiscreteSlider> */}
                        
                        {visGrafico && <LineChart
                        {...chartsParams}
                        yAxis={[{
                          min: 0.0,
                          max: 1.0
                        }
                        ]}
                        series={[
                            { data: values1, color:"#1B0B54"}
                        ]}

                        sx={{
                            '.MuiLineElement-root': {
                            stroke: '#1B0B54',
                            strokeWidth: 2,
                            },
                            '.MuiMarkElement-root': {
                            display: "none"
                            },
                            margin:"auto"
                        }}
                        />}

                        <CustomizedProgressBars player={giocatore1} focus={speed1} focusColor={focusColor1}>

                        </CustomizedProgressBars>
                    </Grid>
                      
                    <Divider>
                    <Typography variant="h6" style={{ minHeight: '2vh'}}>
                          {
                            (hh < 10 ? "0" + hh : hh) +
                            ":" +
                            (mm < 10 ? "0" + mm : mm) +
                            ":" +
                            (ss < 10 ? "0" + ss : ss)
                          }
                        </Typography>
                    </Divider>
                    <Typography variant="h6" style={{ textAlign:"center", width:"100%"}}>
                    <Box
                      component="img"
                      src="./assets/2.png"
                      height={30}
                      sx={{marginRight:2}}
                    />
                      {giocatore2}
                      </Typography>
                    <Grid id="bottom-row" 
                        container
                        style={{ minHeight: '40vh' , overflow: 'auto', paddingRight: 20, paddingLeft: 20}}
                        wrap='nowrap'
                        // sx ={{backgroundColor: "#7e769c"}}
                            >

                            {/* <DiscreteSlider speed={speed2} setSpeed={setSpeed2} player={"2"}></DiscreteSlider> */}
                            
                              {visGrafico && <LineChart
                              {...chartsParams}
                                yAxis={[{
                                  min: 0.0,
                                  max: 1.0
                                }
                                ]}
                                series={[
                                  { data: values2, color:"#1B0B54"}
                              ]}

                                sx={{
                                '.MuiLineElement-root': {
                                    stroke: '#1B0B54',
                                    strokeWidth: 2,
                                },
                                '.MuiMarkElement-root': {
                                    display: "none"
                                },
                                margin:"auto"
                                }}
                            />}
                   
                              <CustomizedProgressBars player={giocatore2} focus={speed2} focusColor={focusColor2}>

                        </CustomizedProgressBars>
                    </Grid>
            </Grid>
        </Grid>
        }

        {dashboard && 
        <>
        <Box sx={{ width: '75%', margin:"auto", padding:5}}> 
          <DataTable giocatori={giocatori}></DataTable>
        </Box>
        
        </>}
    </>}

    </ThemeProvider>
      </>
  );
}

export default App;



/* <div><TextField label="Colore" onChange={handleChange} /></div>
      {color} */