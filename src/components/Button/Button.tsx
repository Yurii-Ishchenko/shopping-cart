import React from 'react';
import useStyles from './Button-styles';

interface IProps {
  children: React.ReactChild;
  onClick: () => void;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  hoverColor?: string;
}

export default function Button({
  children,
  onClick = () => null,
  backgroundColor,
  height = '25px',
  width = '100px',
  border = 'none',
  borderRadius = '4px',
  color = 'white',
  hoverColor = '',
}: IProps) {
  const styles = {
    backgroundColor,
    height,
    width,
    border,
    borderRadius,
    color,
    hoverColor,
  };
  const classes = useStyles(styles);

  return (
    <button type="button" className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}
