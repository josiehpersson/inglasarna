import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Footer from './components/Footer';
import BookingBtn from './components/BookingBtn';
import ThreeColInfoBox from './components/ThreeColInfoBox/ThreeColInfoBox';
import Start from './views/Start';
import Prices from './views/Prices';
import Products from './views/Products';
import How from './views/How';
import Gallery from './views/Gallery';
import Contact from './views/Contact';

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router basename='/inglasarna/'>
        <NavbarContainer />
        <div style={{ padding: '5vh' }} />
        <BookingBtn />
        <Switch>
          <Route path='/' exact={true}>
            <Start />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/prices'>
            <Prices />
          </Route>
          <Route path='/how'>
            <How />
          </Route>
          <Route path='/gallery'>
            <Gallery />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Contact />
        </Switch>
        <div style={{ padding: '2vh' }} />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
