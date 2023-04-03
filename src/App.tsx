import React from "react";
import { Routes, Route } from "react-router-dom";
import RootPage from "./pages/RootPage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootPage />} />
      </Routes>
    </>
  );
};

export default App;
