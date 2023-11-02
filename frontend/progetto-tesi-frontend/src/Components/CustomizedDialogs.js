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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(props) {
  
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
        props.setOpen(false)
      }
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        maxWidth="lg"
        fullWidth="true"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          NUOVO GIOCO
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
        <DialogContent dividers>
          
            <VerticalLinearStepper 
            setOpen={props.setOpen} 
            setStartNewGame={props.setStartNewGame}
            giocatore1={props.giocatore1} 
            setGiocatore1={props.setGiocatore1}
            giocatore2={props.giocatore2} 
            setGiocatore2={props.setGiocatore2}
            setDashboard={props.setDashboard}
            percorso={props.percorso}
            setPercorso={props.setPercorso}
            nGiri={props.nGiri}
            setNGiri={props.setNGiri}
            visGrafico={props.visGrafico}
            setVisGrafico={props.setVisGrafico}
            salvDati={props.salvDati}
            setSalvDati={props.setSalvDati}></VerticalLinearStepper>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}