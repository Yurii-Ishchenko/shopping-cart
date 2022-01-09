import React from 'react';
import useStyles from './Container-styles';
import images from '../../images/images';
interface IProps {
  children: React.ReactNode;
}
export default function Container({ children }: IProps) {
  const classes = useStyles(images.bgImage);
  return <div className={classes.container}>{children}</div>;
}
