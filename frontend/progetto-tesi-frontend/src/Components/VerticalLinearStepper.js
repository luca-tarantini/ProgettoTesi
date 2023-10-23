import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import CircularIntegration from './CircularIntegration';
import { styled, makeStyles } from '@mui/material/styles';
import { TextField } from '@mui/material';

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
        description: `Scegliere il percorso più adatto in base alla difficoltà`,
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
  const [activeStep, setActiveStep] = React.useState(0);

  const handleGiocatore1 = (e) => {
        props.setGiocatore1(e.target.value);
    }

    const handleGiocatore2 = (e) => {
        props.setGiocatore2(e.target.value);
    }

  const handleNext = () => {
    if(activeStep === 3)
    {props.setStartNewGame(true);
      props.setDashboard(false);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
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
    >
        <Paper elevation={3} />
        <Paper elevation={3} />
        <Paper elevation={3} />
        <Paper elevation={3} />
    </Box>
                    
                </>}
                <Typography>{step.description}</Typography>
                {index === 1 && <>
                    <TextField id="outlined-basic" value={props.giocatore1} onChange={handleGiocatore1} label="Nome giocatore 1" variant="filled" autoComplete="off" fullWidth="true"></TextField>
                    <TextField id="outlined-basic" value={props.giocatore2} onChange={handleGiocatore2} label="Nome giocatore 2" variant="filled" autoComplete="off" fullWidth="true"></TextField>
                    </>
                }

                {index === 2 && <>
                    <CircularIntegration player="1"></CircularIntegration>
                <CircularIntegration player="2"></CircularIntegration>
                </>
                }
             
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
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
