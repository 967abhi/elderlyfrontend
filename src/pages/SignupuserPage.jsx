// import React from "react";
import SignupForm from "../components/SignupForm";
// import Singupforcaretaker from "../components/singupforcaretaker";

const SignupuserPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-sections">
        <SignupForm role="User" />
        {/* <Singupforcaretaker role="caretaker" /> */}
      </div>
    </div>
  );
};

export default SignupuserPage;
