import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header/Header";
import "./App.css";

const WomenPage = lazy(() => import("./Pages/WomenPage/WomenPage"));
const ManPage = lazy(() => import("./Pages/ManPage/ManPage"));
const KidsPage = lazy(() => import("./Pages/KidsPage/KidsPage"));

function App() {
  return (
    <Container>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<WomenPage />} />
          <Route path="/Man" element={<ManPage />} />
          <Route path="/Kids" element={<KidsPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
