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
        {/* <label htmlFor="username">Your name:</label> */}
        <input
          id="nameInput"
          name="username"
          placeholder="Name"
          onChange={handleChange}
        ></input>
        {/* <label htmlFor="zipcode">Your zip code:</label> */}
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

// function Form() {
//   const handleSubmit = (event) => {
//     event.preventDefault(); // prevent default form submission
//     window.location.href = 'http://localhost:8080/center'; // redirect to desired URL
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//        <label htmlFor="username">Your name:</label>
{
  /* <input name="username"></input>
<label htmlFor="zipcode">Your zip code:</label>
<input name="zipcode"></input>
</form>
<button><Link to="/home">GET SUNNY</Link></button>
</div> */
}
//   );
// }
