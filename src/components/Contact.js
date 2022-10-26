import React from "react";
// import Error from "./Error.js";
import ErrorImg from "../images/error.png";

export default function Contact() {
  return (
    <div className="wrapper">
      <h2>Error 404: Contact Page Not Found!</h2>
      <h5>Contact Support...Oops! </h5>
     <div className="error">
      <img src={ErrorImg} alt="" />
    </div>
    </div>
  );
}
