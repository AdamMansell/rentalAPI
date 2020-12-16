import React from "react";
import { useState } from 'react';
import Matter from './Matter';
import WorkPage from './WorkPage';
import Hygge from './HyggeControl';
import Splash from './Splash';
import Header from "./Header";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import * as v from "./PageVariants";

function App() {

  const location = useLocation();

    return (
      <div settle={{ height: "100vh" }}>
          <Header />
          <main
            // className="col-6 col-sm-8 col-md-10 py-5"
            style={{ position: "absolute" }}
          >
            <AnimatePresence>
              <Switch location={location} key={location.pathname}>
                <Route path='/matter' component={Matter}/>
                <Route path="/about" component={About} />
                <Route path="/settings" component={Settings} />
                <Route path="/work" component={Work} />
                <Route path="/" component={Splash}/>
              </Switch>
            </AnimatePresence>
          </main>
      </div>
    );

  }


function Work() {

  const [workSelection, handleWorkSelect] = useState(null);

  const clickWorkSelect = (id) => (handleWorkSelect(workSelection = id))

  return (
    <motion.div
    style={{position: "absolute", width: "100vw"}}
      initial="initial"
      animate="in"
      exit="out"
      variants={v.pageVariants}
      transition={v.pageTransitions}
      className="bg-transparent"
    >
      <WorkPage />
      <Switch>
        <Route path="/hygge" component={Hygge}/>
      </Switch>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div
    style={{position: "absolute", width: "100vw"}}
      initial="initial"
      animate="in"
      exit="out"
      variants={v.pageVariants}
      transition={v.pageTransitions}
      className="bg-transparent about-grid-container"
    >
  <div class="square1"></div>
  <div class="square2">
  <h1>About</h1>
      <p>
        Let's animate transitions between React Router routes with Framer Motion
      </p>
      <h2>Framer Motion</h2>
      <p>
        Framer Motion is a great library for animations in React easily and
        quickly.
      </p>
      <h2>React Router</h2>
      <p>One of the most well known routers in the React ecosystem.</p>
  </div>
  <div class="square3"></div>
    </motion.div>
  );
}

function Settings() {
  return (
    <motion.div
    style={{position: "absolute", width: "100vw"}}
      initial="initial"
      animate="in"
      exit="out"
      variants={v.pageVariants}
      transition={v.pageTransitions}
      className="bg-transparent about-grid-container"
    >
      <div class="square1"></div>
  <div class="square2">
      <div className="row">
        <div className="col-md-8">
          <h1>Settings</h1>
          <form>
            <fieldset>
              <legend>Details</legend>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Preferences</legend>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="large-labels"
                  className="custom-control-input"
                />
                <label htmlFor="large-labels" className="custom-control-label">
                  Use Larger Labels
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="email-opt-in"
                  className="custom-control-input"
                />
                <label htmlFor="email-opt-in" className="custom-control-label">
                  Receive Notifications by Email
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="hide-profile-pic"
                  className="custom-control-input"
                />
                <label
                  htmlFor="hide-profile-pic"
                  className="custom-control-label"
                >
                  Show Profile Image
                </label>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
  </div>
  <div class="square3"></div>
    </motion.div>
  );
}

export default App;
