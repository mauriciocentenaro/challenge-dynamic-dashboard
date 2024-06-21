import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, TextField } from '@mui/material';
import useDataForm from '../hooks/useDataForm';

const DataForm = () => {
  const { formState, handleSubmit, handleClickOpen, handleClose, handleSnackbarClose, handleChange } = useDataForm();
  const { open, title, userId, titleError, userIdError, snackbarOpen, snackbarMessage } = formState;

  return (
    <div>
      <Button variant="outlined" color="primary" style={{ marginTop: '20px', marginRight: '25px', float: 'right' }} onClick={handleClickOpen}>
        Add Data
      </Button>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Data</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            name="title"
            value={title}
            onChange={handleChange}
            error={titleError !== ''}
            helperText={titleError}
          />
          <TextField
            margin="dense"
            label="User ID"
            fullWidth
            name="userId"
            value={userId}
            onChange={handleChange}
            error={userIdError !== ''}
            helperText={userIdError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default DataForm;
