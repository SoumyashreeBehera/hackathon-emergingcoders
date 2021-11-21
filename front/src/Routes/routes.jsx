import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Homepage";
import Employee from "../components/EmployeeProduct/Employee";
import LoginPage from "../components/LoginPage/LoginPage";
import { Navbar } from "../components/Navbar";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="employee" element={<Employee />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};

export { AllRoutes };
