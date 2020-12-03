import React, { useState } from "react"
import { ThemeProvider } from "@material-ui/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "../components/layouts/Header"
import theme from "./layouts/Theme"
import Footer from "../components/layouts/Footer"
import LandingPage from "../components/Home/LandingPage"
import Service from "../components/pages/Services"
import AirportTransfer from "../components/pages/AirportTransfer"
import BusRentals from "../components/pages/BusRentals"
import About from "../components/pages/About"
import ContactUs from "../components/pages/ContactUs"
import Book from "../components/pages/Book"
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)
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
            render={(props) => <Service setValue={setValue} {...props} />}
          />
          <Route
            exact
            path="/fleet"
            component={() => <div>Explore Our Fleets</div>}
          />
          <Route exact path="/about" render={(props) => <About />} />
          <Route exact path="/contact" render={(props) => <ContactUs />} />
          <Route exact path="/book" render={() => <Book />} />
          <Route
            exact
            path="/bus-rental"
            render={(props) => (
              <BusRentals
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/airport-transfer"
            render={(props) => (
              <AirportTransfer
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
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
  )
}
export default App
