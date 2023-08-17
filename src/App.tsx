import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Container from "./components/common/Container";
import Hero from "./components/layout/Hero";
import Navigation from "./components/layout/Navigation";
import { Latest, Performance, Portfolio, Reviews, Summary } from "./components";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Navigation />
      <div className="wrapper">
        <Routes>
          <Route path="/summary" element={<Summary />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/latest" element={<Latest />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
