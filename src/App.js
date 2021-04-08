import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import ContactBox from './components/ContactBoxes/ContactBox'

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '#003595',
    },
    secondary: {
      main: '#003595',
      contrastText: '#FFFFFF',
    },
    textPrimary: {
      main: '#1C1C1C',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: ['Spinnaker'],
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    subtitle1: {
      fontSize: '1.1rem',
    },
    body: {
      fontSize: '1rem',
    },
  },
  spacing: 8,
});

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(9),
    padding: 0,
    margin: 0,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Navbar />
      <ContactBox />
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
