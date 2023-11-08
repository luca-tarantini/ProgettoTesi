import * as React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import {ReactP5Wrapper} from "react-p5-wrapper";
import sketchStart from './sketchStart';
import { TextField, Button, Fab, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { LineChart } from '@mui/x-charts/LineChart';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ResponsiveAppBar from './Components/AppBar';
import AvvioGiocoDialog from './Components/AvvioGiocoDialog';
import DataTable from './Components/DataTable';
import FocusControl from './Components/FocusControl';
import Classifica from './Components/Classifica';
import {io} from "socket.io-client";

let interv1;
let interv2;
let crono;

function App() {

//  const plugin = new OSC.WebsocketClientPlugin({
//   url: "127.0.0.1:7489", // URL to your Web Socket server.
//   metadata: true
// });

// const plugin = new OSC.WebsocketClientPlugin({
//   host:"192.168.0.203",
//   port: 7489 })
  
// const osc = new OSC({ plugin: plugin })



// var portIn = 7489;

//iOS can listen to specific "/adress/", leave it emtpy to listen to all 
// var addressToListen = "";

// to start listening to OSC messages (iOS):
// osc.createServer(addressToListen, portIn);

// osc.open() // start a WebSocket server on port 8080

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
  const [logged, setLogged] = useState(false);
  
  const socket = io("ws://127.0.0.1:5007/", {
            reconnectionDelayMax: 10000
          });

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
    { 
      socket.on('/focus_1',message => {
        // console.log(message.slice(1, -2));
        setSpeed1(parseFloat(message.slice(1, -2)));
      });

      socket.on('/focus_2',message => {
        // console.log(message.slice(1, -2));
        setSpeed2(parseFloat(message.slice(1, -2)));
      });

    //   interv1 = setInterval(function() {
    //     console.log(Math.random()*(0.9-0.2)+0.2);
    //       setSpeed1(Math.random()*(0.9-0.2)+0.2);
    //   }, 50);

    //   interv2 = setInterval(function() {
    //     //console.log(Math.random()*(0.9-0.2)+0.2);
    //     setSpeed2(Math.random()*(0.9-0.2)+0.2);
    // }, 50);

      

    crono = setInterval(function() {
      setSs(ss => ss+1);
    }, 1000);
    }
    else
      {
        // clearInterval(interv1);
        // clearInterval(interv2);
        socket.removeAllListeners();
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

  function stopCrono() {
    clearInterval(crono);
    setHh(0);
    setMm(0);
    setSs(0);
  }

  function login(){
    setLogged(true);
  }

  return (
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

      <AvvioGiocoDialog 
        open={newGame} 
        setOpen={setNewGame}
        setStartNewGame={setStartNewGame} 
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
      </AvvioGiocoDialog>

      <Classifica 
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
      </Classifica>

      {startNewGame && 
        
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
                    >
                        
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
                        <FocusControl player={giocatore1} focus={speed1} focusColor={focusColor1}></FocusControl>
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
                            >
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
                   
                            <FocusControl player={giocatore2} focus={speed2} focusColor={focusColor2}></FocusControl>
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