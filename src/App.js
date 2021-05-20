import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from './assets/theme';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Footer from './components/Footer';
import ThreeColInfoBox from './components/ThreeColInfoBox/ThreeColInfoBox';
import Start from './views/Start';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavbarContainer />
      <div style={{padding: '5vh'}} />
      <Start />
      <div style={{padding: '2vh'}} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
