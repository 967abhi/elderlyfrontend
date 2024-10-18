// import React from 'react'

// const Signupcaretaker = () => {
//   return (
//     <div>Signupcaretaker</div>
//   )
// }

// export default Signupcaretaker
// import React from "react";
// import SignupForm from "../components/SignupForm";
import Singupforcaretaker from "../components/singupforcaretaker";

const Signupcaretaker = () => {
  return (
    <div className="signup-page">
      <div className="signup-sections">
        {/* Signup for Caretaker */}
        {/* <SignupForm role="Caretaker" /> */}

        {/* Signup for User */}

        {/* <SignupForm role="User" /> */}
        <Singupforcaretaker role="caretaker" />
      </div>
    </div>
  );
};

export default Signupcaretaker;
