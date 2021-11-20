import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Homepage";
import Employee from "../components/EmployeeProduct/Employee";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export { AllRoutes };
