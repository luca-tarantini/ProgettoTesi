import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import VerticalLinearStepper from './VerticalLinearStepper';
import {Box} from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogsFinish(props) {
  
  function salvataggio() {
    let format = (props.hh < 10 ? "0" + props.hh : props.hh) +
        ":" +
        (props.mm < 10 ? "0" + props.mm : props.mm) +
        ":" +
        (props.ss < 10 ? "0" + props.ss : props.ss);
    
        console.log(format);
    
    let id1 = props.giocatori.length+1;
    let id2 = props.giocatori.length+2;

    let nomeAltro;
    if(props.nomeVincitore !== props.giocatore1)
        nomeAltro = props.giocatore1;
    else
      nomeAltro = props.giocatore2;

  let nuovo1 = {
    "id":id1,
    "nome":props.nomeVincitore,
    "data":new Date(),
    "vittoria":true,
    "tempo":format,
    "percorso":1 //da aggiustare
  }

  let nuovo2 = {
    "id":id2,
    "nome":nomeAltro,
    "data":new Date(),
    "vittoria":false,
    "tempo":"---",
    "percorso":1 //da aggiustare
  }

    props.setGiocatori([nuovo1, nuovo2, ...props.giocatori]);
  }

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
        salvataggio();
        props.setOpen(false);
        props.stopCrono();
        props.resettaGioco();
        
      }
  };

  const handleNext = (event, reason) => {
    if (reason !== 'backdropClick') {


      salvataggio();

        props.setOpen(false);
        props.stopCrono();
        props.avviaNuovoGioco();
      }
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        maxWidth="md"
        fullWidth="true"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          CLASSIFICA
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{display:"contents"}}>
          {/* <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography> */}

          <Box
            component="img"
            src="../assets/cup.png"
            width={150}
            sx={{margin:"auto"}}
          />

          <Typography variant='h5' align='center' color="primary">
            <b>1° {props.nomeVincitore}</b>
          </Typography>

          {props.nomeVincitore !== props.giocatore1 &&
            <Typography variant='h6' align='center'>
              2° {props.giocatore1}
            </Typography>
          }


          {props.nomeVincitore !== props.giocatore2 &&
            <Typography variant='h6' align='center'>
              2° {props.giocatore2}
            </Typography>
          }

            
        </DialogContent>
        <DialogActions>

        <Button onClick={handleClose} >
            Torna alla dashboard
          </Button>

          <Button autoFocus onClick={handleNext}>
            NUOVO GIOCO
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}