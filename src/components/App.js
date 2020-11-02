import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/layouts/Header';
import theme from './layouts/Theme';
import Footer from '../components/layouts/Footer';
import LandingPage from '../components/Home/LandingPage';
import Service from '../components/services/Services';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => <Service {...props} />}
          />
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
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
