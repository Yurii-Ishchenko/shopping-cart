import { useStyles } from './Modal-styles';

interface IProps {
  children: any;
  onClose: () => void;
}
export default function Modal({ children, onClose }: IProps) {
  const classes = useStyles();
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={classes.overlay} onClick={handleOverlayClick}>
      <div className={classes.modal}>{children}</div>
    </div>
  );
}
