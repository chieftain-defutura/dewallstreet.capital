import React from "react";
import { Routes, Route } from "react-router-dom";
import RootPage from "./pages/RootPage";
import FooterOne from "./componets/FooterOne";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/footer" element={<FooterOne />} />
      </Routes>
    </>
  );
};

export default App;
