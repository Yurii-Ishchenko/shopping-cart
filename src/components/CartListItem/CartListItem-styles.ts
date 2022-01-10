import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    marginLeft: 15,
    marginRight: 15,
    width: 200,
    height: 200,
    border: '3px solid black',
    borderRadius: 5,
    padding: 15,
    backgroundColor: 'rgba(249, 236, 236, 0.9)',
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 15,
  },

  counter: {
    display: 'flex',
    justifyContent: 'center',
    height: 30,
  },
  button: {
    width: 30,
    height: 30,
    border: '1px solid black',
    borderRadius: '50%',
    fontSize: 20,
    backgroundColor: '#00cc00',
  },
  quantityContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  price: {
    marginTop: 0,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 30,
  },

  quantity: {
    fontSize: 20,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default useStyles;
