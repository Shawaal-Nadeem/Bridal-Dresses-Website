import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
// import Dress from "./dress";
import About from "./about";
import Footer from "./footer";
const LazyDress=React.lazy(()=> import('./dress'))
function RouterConfig() {
    return (
      <Router>
        <Navbar/>
            <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Dresses" element={<React.Suspense fallback='Loading....'><LazyDress/></React.Suspense>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            </Routes>
        <Footer/>
      </Router>
    );
  }
  
  export default RouterConfig;
