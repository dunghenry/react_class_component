import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./components/events";
import Forms from "./components/forms";
import Lifecycle from "./components/lifecycle";
import Cars from "./components/lists/Cars";
import Props from "./components/props";
import State from "./components/state";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AboutPage from "./pages/AboutPage";
import Layout from "./pages/Layout";
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        {/* <h1>Welcome React ClassComponent</h1> */}
        {/* <State/> */}
        {/* <Props favcol="black"/> */}
        {/* <Lifecycle/> */}
        {/* <Events /> */}
        {/* <Cars/> */}
        {/* <Forms /> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;