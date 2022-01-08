import useStyles from './Container-styles';
import images from '../../images/images';
export default function Container({ children }: any) {
  const classes = useStyles(images.bgImage);
  return <div className={classes.container}>{children}</div>;
}
