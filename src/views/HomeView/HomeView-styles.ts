import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  title: { textAlign: 'center', fontSize: 50, margin: 0 },
  linkContainer: {
    display: 'flex',
  },
  link: {
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 30,
  },
  iconContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  cartIconChild: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: '46%',
    bottom: '47%',
    width: 24,
    height: 24,
    backgroundColor: 'green',
    borderRadius: '50%',
  },
  innerChild: {
    color: 'white',
  },
});
export default useStyles;
