import { createUseStyles } from 'react-jss';
interface IProps {
  backgroundColor?: string;
  width: string;
  height: string;
  border: string;
  borderRadius: string;
  color: string;
  hoverColor: string;
}
const useStyles = createUseStyles({
  btn: {
    height: (props: IProps) => props.height,
    width: (props: IProps) => props.width,
    backgroundColor: (props: IProps) => props.backgroundColor,
    color: (props: IProps) => props.color,
    borderRadius: (props: IProps) => props.borderRadius,
    border: (props: IProps) => props.border,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    '&:hover': { backgroundColor: (props: IProps) => props.hoverColor },
  },
});
export default useStyles;
