// // CaretakerProfile.js
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";

// const CaretakerProfile = () => {
//   const [caretakerData, setCaretakerData] = useState(null);
//   const Navigate = useNavigate();
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch caretaker data when component mounts
//     const fetchData = async () => {
//       try {
//         // Get the token from localStorage (assumes token is stored there after login)
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setError("No token found, please login first.");
//           return;
//         }

//         // Fetch data from API with token in Authorization header
//         const response = await axios.get("http://localhost:3000/me", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setCaretakerData(response.data.user); // Assuming user data is in response.data.user
//       } catch (err) {
//         setError("Failed to fetch caretaker data Please Login");
//         Navigate("/loginascaretaker");
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!caretakerData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="caretaker-profile">
//       <h2>Caretaker Profile</h2>
//       <p>
//         <strong>First Name:</strong> {caretakerData.firstName}
//       </p>
//       <p>
//         <strong>Last Name:</strong> {caretakerData.lastName}
//       </p>
//       <p>
//         <strong>Age:</strong> {caretakerData.age}
//       </p>
//       <p>
//         <strong>Email:</strong> {caretakerData.email}
//       </p>
//       <p>
//         <strong>Address:</strong> {caretakerData.address}
//       </p>
//       <p>
//         <strong>Phone Number:</strong> {caretakerData.phoneNumber}
//       </p>
//       <p>
//         <strong>Pincode:</strong> {caretakerData.pincode}
//       </p>
//       <p>
//         <strong>Status:</strong> {caretakerData.status}
//       </p>
//       <p>
//         <strong>User Current Address:</strong>{" "}
//         {caretakerData.usercurrentaddress}
//       </p>
//       <p>
//         <strong>Created At:</strong>{" "}
//         {new Date(caretakerData.createdAt).toLocaleString()}
//       </p>
//     </div>
//   );
// };

// export default CaretakerProfile;
// // CaretakerProfile.js
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router";

// // const CaretakerProfile = () => {
// //   const [caretakerData, setCaretakerData] = useState(null);
// //   const Navigate = useNavigate();
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) {
// //           setError("No token found, please log in first.");
// //           return;
// //         }

// //         const response = await axios.get("http://yourserver.com/caretaker/me", {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });

// //         // Verify if data structure matches expected keys
// //         const data = response.data.user;
// //         if (!data) {
// //           setError("No user data found in response.");
// //           return;
// //         }

// //         // Extract only the last entries from each array
// //         setCaretakerData({
// //           currentAddress: data.usercurrentaddress?.slice(-1)[0] || "N/A",
// //           duration: data.userduration?.slice(-1)[0] || "N/A",
// //           email: data.useremail?.slice(-1)[0] || "N/A",
// //           firstName: data.userfirstname?.slice(-1)[0] || "N/A",
// //           lastName: data.userlastname?.slice(-1)[0] || "N/A",
// //           phoneNumber: data.userphonenumber?.slice(-1)[0] || "N/A",
// //           pincode: data.userpincode?.slice(-1)[0] || "N/A",
// //           price: data.userprice?.slice(-1)[0] || "N/A",
// //           endingTime: data.userendingtime?.slice(-1)[0] || "N/A",
// //           startingTime: data.userstartingtime?.slice(-1)[0] || "N/A",
// //         });
// //       } catch (err) {
// //         console.error("Error fetching data:", err.response || err.message);
// //         setError("Failed to fetch caretaker data.");
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (error) {
// //     return <div>{error}</div>;
// //   }

// //   if (!caretakerData) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div className="caretaker-profile">
// //       <h2>Last Activity Data</h2>
// //       <p>
// //         <strong>Current Address:</strong> {caretakerData.currentAddress}
// //       </p>
// //       <p>
// //         <strong>Duration:</strong> {caretakerData.duration}
// //       </p>
// //       <p>
// //         <strong>Email:</strong> {caretakerData.email}
// //       </p>
// //       <p>
// //         <strong>First Name:</strong> {caretakerData.firstName}
// //       </p>
// //       <p>
// //         <strong>Last Name:</strong> {caretakerData.lastName}
// //       </p>
// //       <p>
// //         <strong>Phone Number:</strong> {caretakerData.phoneNumber}
// //       </p>
// //       <p>
// //         <strong>Pincode:</strong> {caretakerData.pincode}
// //       </p>
// //       <p>
// //         <strong>Price:</strong> {caretakerData.price}
// //       </p>
// //       <p>
// //         <strong>Ending Time:</strong> {caretakerData.endingTime}
// //       </p>
// //       <p>
// //         <strong>Starting Time:</strong> {caretakerData.startingTime}
// //       </p>
// //     </div>
// //   );
// // };

// // export default CaretakerProfile;
import React, { useEffect, useState } from "react";
import axios from "axios";

const CaretakerProfile = () => {
  const [caretakerData, setCaretakerData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found, please login first.");
          return;
        }

        const response = await axios.get("http://localhost:3000/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data.user;
        setCaretakerData(data);
      } catch (err) {
        setError("Failed to fetch caretaker data.");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!caretakerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="caretaker-profile">
      <h2>Caretaker Profile</h2>
      <p>
        <strong>First Name:</strong> {caretakerData.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {caretakerData.lastName}
      </p>
      <p>
        <strong>Age:</strong> {caretakerData.age}
      </p>
      <p>
        <strong>Email:</strong> {caretakerData.email}
      </p>
      <p>
        <strong>Address:</strong> {caretakerData.address}
      </p>
      <p>
        <strong>Phone Number:</strong> {caretakerData.phoneNumber}
      </p>
      <p>
        <strong>Pincode:</strong> {caretakerData.pincode}
      </p>
      <p>
        <strong>Status:</strong> {caretakerData.status}
      </p>
      <p>
        <strong>Created At:</strong>{" "}
        {new Date(caretakerData.createdAt).toLocaleDateString()}
      </p>

      <p>
        <strong>Current Address:</strong>
      </p>
      <ul>
        {caretakerData.usercurrentaddress.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>

      <p>
        <strong>Duration:</strong>
      </p>
      <ul>
        {caretakerData.userduration.slice(-1).map((duration, index) => (
          <li key={index}>{duration}</li>
        ))}
      </ul>

      <p>
        <strong>User Email:</strong>
      </p>
      <ul>
        {caretakerData.useremail.slice(-1).map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>

      <p>
        <strong>User First Name:</strong>{" "}
        {caretakerData.userfirstname.slice(-1)[0]}
      </p>
      <p>
        <strong>User Last Name:</strong>{" "}
        {caretakerData.userlastname.slice(-1)[0]}
      </p>
      <p>
        <strong>User Phone Number:</strong>{" "}
        {caretakerData.userphonenumber.slice(-1)[0]}
      </p>
      <p>
        <strong>User Pincode:</strong> {caretakerData.userpincode.slice(-1)[0]}
      </p>
      <p>
        <strong>Price:</strong> {caretakerData.userprice.slice(-1)[0]}
      </p>
      <p>
        <strong>Ending Time:</strong>{" "}
        {caretakerData.userendingtime.slice(-1)[0]}
      </p>
      <p>
        <strong>Starting Time:</strong>{" "}
        {caretakerData.userstartingtime.slice(-1)[0]}
      </p>
    </div>
  );
};

export default CaretakerProfile;
