import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/loader/Loader";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Github = lazy(() => import("./components/github/Github"));
const Query = lazy(() => import("./pages/editor/QueryPage"));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className='App' id={`${darkMode ? `dark` : `light`}-mode`}>
      <Suspense
        fallback={
          <Loader />
        }
      >
        <Router>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Route path='/' exact component={Home} />
          <Route path='/query' exact component={Query} />
          <Route path='/git' exact component={Github} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
