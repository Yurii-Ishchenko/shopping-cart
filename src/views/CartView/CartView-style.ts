import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  title: {
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginLeft: 40,
    marginRight: 40,
  },
  deleteTitle: {
    fontSize: 40,
    color: 'white',
  },
});
export default useStyles;
