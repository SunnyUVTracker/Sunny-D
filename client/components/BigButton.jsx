import React, { useState, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import vitaminDQuotes from '../assets/Quotes.js';


function getRandomQuote() {
  return vitaminDQuotes[Math.floor((Math.random() * vitaminDQuotes.length))];
}

function BigButton(props) {
  //Send to backend:
  // Make request to /api/submit
  // POST
  // BODY: {username: 'username', date: 'string', points: 'number'}
  // response.body: number

  const addSession = (username, date, points) => {
    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, date: date, points: points }),
    })
      .then((response) => response.json())
      .then((response) => {
        updatePoints(response);
      });
  };

  const getUpdatedPoints = () => {
    if(isOutside) {
      fetch("/api/getPoints")
        .then((response) => response.json())
        .then((response) => {
          updatePoints(response);
        });
    }
  }

  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [message, setMessage] = useState(getRandomQuote())
  const [isOutside, switchOutside] = useState(false);
  const [startTime, setStart] = useState(0);
  const [totalPoints, updatePoints] = useState(0);

  useEffect(() => {
    fetch(`/api/submit/${props.username}`)
      .then((response) => response.json())
      .then((response) => {
        if (!response) {
          updatePoints(0);
        } else {
          updatePoints(response.points);
        }
      });

      // setTimeout(getUpdatedPoints, 1000);
  });

  const handleClick = () => {
    if (isOutside === true) {
      const totalMinutes = (Date.now() - startTime) / 60000;
      setStart(0);
      const points = props.uv * totalMinutes;

      addSession(props.username, new Date().toDateString(), points);
      setIsSnackOpen(true);
    } else {
      setStart(Date.now());
      setIsSnackOpen(false);
      setMessage(getRandomQuote());
    }
    switchOutside(!isOutside);
  };

  function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
  }

  return (
    <div id="d-meter">
      <div>D-Meter: {totalPoints.toFixed(2)}%</div>
      <div id="progress-container">
        <div id="loading" style={{ width: `${totalPoints}%` }}></div>
      </div>
      <br />
      <button id="big-button" onClick={handleClick}>
        {isOutside
          ? "YOU'RE OUTSIDE! GO INSIDE?"
          : "YOU'RE INSIDE! GO OUTSIDE?"}
      </button>
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={isOutside}
        TransitionComponent={TransitionDown}
        autoHideDuration={5000}
        message={message}
        onClose={() => console.log('Active')}
      />
    </div>
  );
}

export default BigButton;
