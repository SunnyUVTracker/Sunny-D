import React from 'react';
import { Link } from "react-router-dom"


function Login(){
    return (
        <div>

            <form>
                <label htmlFor="username">Your name:</label>
                <input name="username"></input>
                <label htmlFor="zipcode">Your zip code:</label>
                <input name="zipcode"></input>
            </form>
            <button><Link to="/home">GET SUNNY</Link></button>
        </div>
        

    )

}

export default Login

// function Form() {
//   const handleSubmit = (event) => {
//     event.preventDefault(); // prevent default form submission
//     window.location.href = 'http://localhost:8080/center'; // redirect to desired URL
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//        <label htmlFor="username">Your name:</label>
{/* <input name="username"></input>
<label htmlFor="zipcode">Your zip code:</label>
<input name="zipcode"></input>
</form>
<button><Link to="/home">GET SUNNY</Link></button>
</div> */}
//   );
// }