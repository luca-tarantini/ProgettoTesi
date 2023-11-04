import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import StepsAvvioGioco from './StepsAvvioGioco';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function AvvioGiocoDialog(props) {
  
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
            <StepsAvvioGioco 
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
            setSalvDati={props.setSalvDati}>
            </StepsAvvioGioco>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}