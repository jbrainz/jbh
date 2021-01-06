import Header from "./code/layouts/Header"
import { ThemeProvider } from "@material-ui/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import theme from "./code/Components/Theme"
import { AppProvider } from "./code/Components/context/ContextState"
import LandingPage from "./code/pages/Home/LandingPage"

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/order"
              component={() => <div>Explore Our Fleets</div>}
            />
            <Route
              exact
              path="/about"
              component={() => <div>Explore Our Fleets</div>}
            />
            <Route
              exact
              path="/contact"
              component={() => <div>Explore Our Fleets</div>}
            />
            <Route
              exact
              path="/menu"
              component={() => <div>Explore Our Fleets</div>}
            />
            <Route exact path="/" render={() => <LandingPage />} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
