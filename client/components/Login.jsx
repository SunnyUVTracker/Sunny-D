import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [zipcodeEntry, zipcodeUpdate] = useState(0);
  const [nameEntry, nameUpdate] = useState("");

  const handleChange = () => {
    zipcodeUpdate(document.getElementById("zipcodeInput").value);
    nameUpdate(document.getElementById("nameInput").value.toUpperCase());
  };
  return (
    <div id="loginElements">
      <form className="flex">
        <input
          id="nameInput"
          name="username"
          placeholder="Name"
          onChange={handleChange}
        ></input>
        <input
          id="zipcodeInput"
          name="zipcode"
          placeholder="Zip Code"
          onChange={handleChange}
        ></input>
      </form>

      <button id="loginButton">
        <Link
          to="/home"
          state={{ zipcodeEntry: zipcodeEntry, nameEntry: nameEntry }}
        >
          <div className="sunnyD-img"></div>
        </Link>
      </button>
    </div>
  );
}

export default Login;
