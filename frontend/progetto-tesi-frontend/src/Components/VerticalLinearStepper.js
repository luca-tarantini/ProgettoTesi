import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import CircularIntegration from './CircularIntegration';
import { styled, makeStyles } from '@mui/material/styles';
import { TextField, FormControl, FormControlLabel, RadioGroup, Radio} from '@mui/material';

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

const steps = [
    {
        label: 'Scelta percorso',
        description: `Scegliere il percorso preferito`,
      },
  {
    label: 'Giocatori',
    description: ``,
  },
  {
    label: 'Collaudo dispositivi',
    description:
      'Indossare i dispositivi per effettuare la calibrazione',
  },
  {
    label: 'Impostazioni gioco',
    description: `Altre impostazioni tipo numero di giri, velocità massima, visibilità grafico o salvataggio dei dati`,
  },
];



export default function VerticalLinearStepper(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [next, setNext] = useState(false);

  const [success1, setSuccess1] = useState(false);
  const [success2, setSuccess2] = useState(false);

  const handleGiocatore1 = (e) => {
        props.setGiocatore1(e.target.value);

        if(props.giocatore1 === undefined || props.giocatore1 === "" || props.giocatore1 === null  || props.giocatore2 === undefined || props.giocatore2 === "" || props.giocatore2 === null)
          setNext(false);
        else
          setNext(true);
    }

    const handleGiocatore2 = (e) => {
        props.setGiocatore2(e.target.value);

        if(props.giocatore1 === undefined || props.giocatore1 === "" || props.giocatore1 === null  || props.giocatore2 === undefined || props.giocatore2 === "" || props.giocatore2 === null)
          setNext(false);
        else
          setNext(true);
    }

    const handlePercorso = (e) => {
      props.setPercorso(e.target.value);
      setNext(true);
  }

    
useEffect(() => {
  if(success1 && success2)
    setNext(true);
},[success1, success2]);

useEffect(() => {
  if(props.giocatore1 === undefined || props.giocatore1 === "" || props.giocatore1 === null  || props.giocatore2 === undefined || props.giocatore2 === "" || props.giocatore2 === null)
          setNext(false);
        else
          setNext(true);
},[props.giocatore1, props.giocatore2]);

useEffect(() => {
  if(props.percorso === undefined || props.percorso === "" || props.percorso === null )
          setNext(false);
        else
          setNext(true);
},[props.percorso]);

  const handleNext = () => {
    if(activeStep === 3)
    {props.setStartNewGame(true);
      props.setDashboard(false);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if(activeStep === 1 && (props.percorso === "1" || props.percorso === "2"|| props.percorso === "3"))
      setNext(true);
    if(activeStep === 2 && (props.giocatore1 !== undefined && props.giocatore1 !== null ) && (props.giocatore2 !== undefined && props.giocatore2 !== null ))
      setNext(true);
    
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    if(activeStep === 3)
      setNext(true);
    if(activeStep === steps.length)
        props.setOpen(false);
  },[activeStep])

  return (
    <Box >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
                {index === 0 && <>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                          m: 1,
                          width: 128,
                          height: 128,
                        },
                      }}

                      onChange={handlePercorso}
                    >
                      <Paper elevation={3} sx={{width:"auto"}}>
                      <label>
                        <input  type="radio" name="test" value="1" checked={props.percorso === "1"}/>
                        <Box
                          component="img"
                          src="./assets/Percorso1.png"
                          sx={{width:"100%"}}
                        />
                      </label>
                      </Paper>

                      <Paper elevation={3} sx={{width:"33%"}}>
                        <label>
                          <input type="radio" name="test" value="2" checked={props.percorso === "2"}/>
                          <Box
                              component="img"
                              src="./assets/Logo.png"
                              sx={{width:"100%"}}
                            />
                        </label>
                      </Paper>
                      
                      <Paper elevation={3} sx={{width:"33%"}}>
                        <label>
                          <input type="radio" name="test" value="3" checked={props.percorso === "3"}/>
                          <Box
                              component="img"
                              src="./assets/Logo.png"
                              sx={{width:"100%"}}
                            />
                        </label>
                      </Paper>
                    </Box>
                </>}
                <Typography>{step.description}</Typography>
                {index === 1 && <>
                    <TextField id="outlined-basic" value={props.giocatore1} onChange={handleGiocatore1} label="Nome giocatore 1" variant="filled" autoComplete="off" fullWidth="true"></TextField>
                    <TextField id="outlined-basic" value={props.giocatore2} onChange={handleGiocatore2} label="Nome giocatore 2" variant="filled" autoComplete="off" fullWidth="true"></TextField>
                    </>
                }

                {index === 2 && <>
                    <CircularIntegration success={success1} setSuccess={setSuccess1} player="1"></CircularIntegration>
                <CircularIntegration success={success2} setSuccess={setSuccess2} player="2"></CircularIntegration>
                </>
                }
             
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    disabled={!next}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Avvia' : 'Avanti'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Indietro
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
