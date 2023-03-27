import React from "react";

function WeatherDisplay(props) {
  return (
    <div id="weatherDisplay">
      <div className="dataCard">
        <div className="data-card-title">Temp: </div>
          <p style={{ "font-size": "26px" }}>{props.temp}°F</p>
      </div>
        <div className="dataCard">
          <div className="data-card-title">Condition: </div>
          <p
            style={{
              "background-image": `url(${props.condition})`,
              "background-size": "100% 100%",
              height: "60px",
              width: "60px",
            }}
          ></p>
        </div>
        <div className="dataCard">
          <div className="data-card-title">UV Index: </div>
          <p style={{ "font-size": "26px" }}>{props.uv}</p>
        </div>
      </div>
  );
}

export default WeatherDisplay;
