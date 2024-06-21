import { renderHook, act } from '@testing-library/react-hooks';
import useDataForm from '../../src/hooks/useDataForm';
import useData from '../../src/context/useData';

jest.mock('../context/useData');

describe('useDataForm hook', () => {
  const addData = jest.fn();

  beforeEach(() => {
    useData.mockReturnValue({ addData });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize form state correctly', () => {
    const { result } = renderHook(() => useDataForm());

    expect(result.current.formState).toEqual({
      open: false,
      title: '',
      userId: '',
      titleError: '',
      userIdError: '',
      snackbarOpen: false,
      snackbarMessage: '',
    });
  });

  it('should open the form', () => {
    const { result } = renderHook(() => useDataForm());

    act(() => {
      result.current.handleClickOpen();
    });

    expect(result.current.formState.open).toBe(true);
  });

  it('should close the form', () => {
    const { result } = renderHook(() => useDataForm());

    act(() => {
      result.current.handleClickOpen();
      result.current.handleClose();
    });

    expect(result.current.formState).toEqual({
      open: false,
      title: '',
      userId: '',
      titleError: '',
      userIdError: '',
      snackbarOpen: false,
      snackbarMessage: '',
    });
  });

  it('should update form state on change', () => {
    const { result } = renderHook(() => useDataForm());

    act(() => {
      result.current.handleChange({ target: { name: 'title', value: 'New Title' } });
    });

    expect(result.current.formState.title).toBe('New Title');
    expect(result.current.formState.titleError).toBe('');
  });

  it('should validate the form correctly', () => {
    const { result } = renderHook(() => useDataForm());

    act(() => {
      result.current.handleSubmit();
    });

    expect(result.current.formState.titleError).toBe('Title is required');
    expect(result.current.formState.userIdError).toBe('User ID must be a number');
  });

  it('should submit the form correctly if valid', () => {
    const { result } = renderHook(() => useDataForm());

    act(() => {
      result.current.handleChange({ target: { name: 'title', value: 'New Title' } });
      result.current.handleChange({ target: { name: 'userId', value: '1' } });
      result.current.handleSubmit();
    });

    expect(result.current.formState.snackbarMessage).toBe('Data added successfully');
    expect(result.current.formState.snackbarOpen).toBe(true);
    expect(result.current.formState.open).toBe(false);
    expect(addData).toHaveBeenCalledWith({ id: 101, title: 'New Title', userId: 1 });
  });

  it('should close the snackbar', () => {
    const { result } = renderHook(() => useDataForm());

    act(() => {
      result.current.handleSnackbarClose();
    });

    expect(result.current.formState.snackbarOpen).toBe(false);
  });
});
