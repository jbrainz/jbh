import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>Rides</div>} />
          <Route
            exact
            path="/fleet"
            component={() => <div>Explore Our Fleets</div>}
          />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Us</div>}
          />
          <Route exact path="/book" component={() => <div>book a ride</div>} />
          <Route
            exact
            path="/destination"
            component={() => <div>Destinations</div>}
          />
          <Route exact path="/login" component={() => <div>Login now</div>} />
          <Route exact path="/sign-up" component={() => <div>Sign Up</div>} />
          <Route
            exact
            path="/bus-rental"
            component={() => <div>Bus Rental</div>}
          />
          <Route
            exact
            path="/vip-transfer"
            component={() => <div>Vip Transfer</div>}
          />
          <Route
            exact
            path="/airport-transfer"
            component={() => <div>Airport Transfer</div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
