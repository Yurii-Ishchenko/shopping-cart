import useStyles from './NotFoundView-styles';

export default function NotFoundView() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.title}>Sorry, page not found... 404</h1>
    </>
  );
}
