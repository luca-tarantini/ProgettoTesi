import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleCloseAnnulla = (event, reason) => {
    if (reason !== 'backdropClick') {
        props.setOpen(false);
      }
    
  };

  const handleCloseExit = (event, reason) => {
    if (reason !== 'backdropClick') {
        props.setOpen(false);
        props.resettaGioco();
      }
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleCloseAnnulla}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Vuoi abbandonare il gioco?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Se esci dal gioco tutti i dati andranno persi.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAnnulla}>Annulla</Button>
          <Button onClick={handleCloseExit} autoFocus>
            Esci dal gioco
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}