import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    position: 'relative',
    width: 300,
    height: 400,
    border: '3px solid black',
    borderRadius: 5,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'rgba(249, 236, 236, 0.7)',
  },
  priceTags: {
    position: 'absolute',
    top: '15%',
    left: '70%',
    transform: 'rotate(30deg)',
  },

  itemContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: { textAlign: 'center' },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  price: {
    fontSize: 30,
    margin: 15,
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});
export default useStyles;
