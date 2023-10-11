import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '0 auto',
    },
    input: {
      marginBottom: theme.spacing(2),
    },
  }));

  export default useStyles;