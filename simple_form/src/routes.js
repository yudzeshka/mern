import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";
import DataPage from "./pages/DataPage";
import Form from "./pages/Form";
export const useRoutes = (isAutentificated) => {
  const userData = localStorage.getItem("userData");
  if (isAutentificated || userData) {
    return (
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Form />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<AuthPage />} />
    </Routes>
  );
};
