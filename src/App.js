import React from "react";

import Loadable from "react-loadable";
import Loading from "./components/helpers/Loading";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { translate } from "react-i18next";

import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import Services from "./components/Services";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const Home = Loadable({
  loader: () => import("./components/Home"),
  loading: Loading
});

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/about" component={About} />
              <Route exact path="/gallery" component={Gallery} />
              <Route path="/events" component={Events} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default translate("common")(App);
