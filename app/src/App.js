import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Page from "./pages/Page";
import Listings from "./pages/Listings";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/page" element={<Page />} />
          <Route path="/jobs/:selectedJob"  element={<Listings/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
