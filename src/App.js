import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from './assets/theme';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Footer from './components/Footer';
import BookingBtn from './components/BookingBtn';
import ThreeColInfoBox from './components/ThreeColInfoBox/ThreeColInfoBox';
import Start from './views/Start';
import Prices from './views/Prices';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavbarContainer />
      <div style={{padding: '5vh'}} />
      <BookingBtn />
      <Prices />
      <div style={{padding: '2vh'}} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
