import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Load from "./components/load/load";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Navbar = lazy(() => import("./components/NavbarPage/NavbarPage"));
const Github = lazy(() => import("./components/Git/Git"));
const Editor = lazy(() => import("./pages/QueryPage/Query"));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className='App' id={`${darkMode ? `dark` : `light`}-mode`}>
      <Suspense
        fallback={
          <Load />
        }
      >
        <Router>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Route path='/' exact component={Home} />
          <Route path='/editor' exact component={Editor} />
          <Route path='/git' exact component={Github} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
