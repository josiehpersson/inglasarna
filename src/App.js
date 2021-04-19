import InfoBox from "./components/InfoBoxes/InfoBox";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import ContactBox from './components/ContactBoxes/ContactBox';
import PhotoGrid from './components/PhotoGrid';
import HowToStepper from './components/HowToStepper'
import ContactForm from './components/ContactForm';
import GridGallery from './components/GridGallery';

import { gridGalleryImages } from './assets/assets'

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#003595",
    },
    secondary: {
      main: "#003595",
      contrastText: "#FFFFFF",
    },
    textPrimary: {
      main: "#1C1C1C",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Spinnaker"],
    h1: {
      fontSize: '2rem',
      '@media(min-width:0px) and (max-width:600px)': {
        fontSize: '0.8rem',
      },
      '@media(min-width:600px) and (max-width:900px)': {
        fontSize: '1.5rem',
      },
    },
    subtitle1: {
      fontSize: '1rem',
      '@media(min-width:0px) and (max-width:600px)': {
        fontSize: '1rem',
      },
      '@media(min-width:600px) and (max-width:1100px)': {
        fontSize: '0.7rem',
      },
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: '0.8rem',
    },
  },
  spacing: 8,
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },


  overrides: {
    MuiStepIcon: {
     root: {
       width: '38px',
       height: '37px',
       '&$completed': {
         color: 'rgba(00,35,95, 0.5)',
       },
       '&$active': {
         color: '#003595',
       },
       color: '#c4c4c4'
      },
      text: {
       color: '#fff',
       fill: '#fff'
      }
    },
    MuiStepConnector: {
      vertical: {
        marginLeft: '19px'
      }
    },
    MuiStepContent: {
      root: {
        marginLeft: '19px',
        paddingLeft: '40px',
        color: '#000'
      }
    },
    MuiStepLabel: {
      iconContainer: {
        paddingRight: '16px'
      },
      label: {
        color: '#c4c4c4'
      }
    },
 }

});

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(15),
    padding: 0,
    margin: 0,
    overflowX: "hidden",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>

      <div className={classes.root}>
        <Navbar />
        <ContactForm />
        <GridGallery rubrik="Våra balkonginglasningar" images={gridGalleryImages} />
        <ContactBox />
        <HowToStepper />
        <InfoBox />
        <PhotoGrid />
        <Footer />
      </div>

    </ThemeProvider>
  );
}

export default App;
