import React, { useState, useEffect } from "react";

function WeatherDisplay(props) {
  return (
    <div>
      SHOWING WEATHER RESULTS FOR {props.city}, {props.region}
      <div>Current Temp: {props.temp}</div>
      <div>{props.condition}</div>
      <div>UV Index: {props.uv}</div>
    </div>
  );
}

export default WeatherDisplay;
