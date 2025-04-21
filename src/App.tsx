import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Dashboard from "pages/Dashboard";
import Game from "pages/Game";
import AOS from "aos";
import { isMobile } from "react-device-detect";

import "aos/dist/aos.css";
import "./fonts.css";
import "./tailwind.css";
import Translator from "pages/Translator";
import Aboutus from "pages/About us";
import Dictionary from "pages/Dictionary";
import HowToUse from "pages/HowToUse";
import PlanYourDay from "pages/PlanYourDay";
import VideoGame from  "components/Videogame"
import SignGame from "components/Signgame"
import VideoLearning from "pages/VideoLearning";

function App() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }, []);

  return (
    <Router basename={process.env.BASE_PATH}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Landing" />
        </Route>

        <Route exact path="/Landing" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/how-to-use" component={HowToUse} />
        <Route exact path="/translate" component={Translator} />
        <Route exact path="/about-us" component={Aboutus} />
        <Route exact path="/dictionary" component={Dictionary} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/planyourday" component={PlanYourDay} />
        <Route exact path="/Videogame" component={VideoGame} />
        <Route exact path="/Signgame" component={SignGame} />
        <Route exact path="/videolearning" component={VideoLearning} />
        
        <Route path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
