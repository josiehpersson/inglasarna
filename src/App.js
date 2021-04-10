import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import ContactBox from './components/ContactBoxes/ContactBox'
import PhotoGrid from './components/PhotoGrid';


import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles';

let theme = createMuiTheme({
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
    fontSize: 12,
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
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.8rem'
    }
  },
  spacing: 8,
});

theme = responsiveFontSizes(theme, ['xs','sm', 'md', 'lg', 'xl']);

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(15),
    padding: 0,
    margin: 0,
    overflowX: 'hidden',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Navbar />
      <ContactBox />
      <PhotoGrid />
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
