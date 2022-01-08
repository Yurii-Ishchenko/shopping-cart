import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  list: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
  },
  totalPrice: {
    textAlign: 'center',
    fontSize: 40,
    margin: 0,
  },
  noProducts: {
    textAlign: 'center',
  },
});
export default useStyles;
