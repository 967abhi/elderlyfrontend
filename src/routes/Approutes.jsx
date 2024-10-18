// src/routes/AppRoutes.jsx
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Layout from "../Layout";
// import SignupForm from "../components/SignupForm";
import SignupuserPage from "../pages/SignupuserPage";
// import Singupforcaretaker from "../components/singupforcaretaker";
import Signupcaretaker from "../pages/Signupcaretaker";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          {/* Home page will render inside Layout */}
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signupasuser" element={<SignupuserPage />} />
          <Route path="/singupascaretaker" element={<Signupcaretaker />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
