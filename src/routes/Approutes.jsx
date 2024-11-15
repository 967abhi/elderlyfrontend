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
import Loginascaretaker from "../components/Login/Loginascaretaker";
import DashboardCaretaker from "../pages/DashboardCaretaker";
import Loginasuser from "../components/Login/Loginasuser";
import UserFeed from "../pages/Userfeed";
import BookStatuspage from "../pages/BookStatuspage";
import Caretakerfeed from "../pages/Caretakerfeed";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />{" "}
          {/* Home page will render inside Layout */}
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signupasuser" element={<SignupuserPage />} />
          <Route path="/singupascaretaker" element={<Signupcaretaker />} />
          <Route path="/loginascaretaker" element={<Loginascaretaker />} />
          <Route path="/loginasuser" element={<Loginasuser />} />
          <Route path="/userfeed" element={<DashboardCaretaker />} />
          <Route path="/userfeed/:id" element={<UserFeed />} />
          <Route path="/ordernow/:id" element={<BookStatuspage />} />
          <Route path="/dashboardcaretaker" element={<Caretakerfeed />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
