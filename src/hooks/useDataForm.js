import { useState } from "react";
import useData from "../context/useData";

const useDataForm = () =>{
  const { addData } = useData();

  const [formState, setFormState] = useState({
    open: false,
    title: '',
    userId: '',
    titleError: '',
    userIdError: '',
    snackbarOpen: false,
    snackbarMessage: '',
  });

  const validateForm = () => {
    const { title, userId } = formState;
    let isValid = true;
    const errors = {};

    if (title.trim() === '') {
      errors.titleError = 'Title is required';
      isValid = false;
    }

    if (userId.trim() === '' || isNaN(userId)) {
      errors.userIdError = 'User ID must be a number';
      isValid = false;
    }

    setFormState({ ...formState, ...errors });
    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const currentIds = [100];
    const nextId = currentIds.length ? Math.max(...currentIds) + 1 : 1;

    addData({ id: nextId, title: formState.title, userId: parseInt(formState.userId, 10) });

    setFormState({
      ...formState,
      snackbarMessage: 'Data added successfully',
      snackbarOpen: true,
      open: false,
    });
  };

  const handleClickOpen = () => {
    setFormState({ ...formState, open: true });
  };

  const handleClose = () => {
    setFormState({
      open: false,
      title: '',
      userId: '',
      titleError: '',
      userIdError: '',
      snackbarOpen: false,
      snackbarMessage: '',
    });
  };

  const handleSnackbarClose = () => {
    setFormState({ ...formState, snackbarOpen: false });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value, [`${name}Error`]: '' });
  };

  return { formState, handleSubmit, handleClickOpen, handleClose, handleSnackbarClose, handleChange };
}

export default useDataForm;