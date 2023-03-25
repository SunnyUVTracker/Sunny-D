import React, { useState, useEffect } from 'react'


function WeatherDisplay(props) {
        return(
            <div>
                SHOWING WEATHER RESULTS FOR {props.zipcodeEntry}
                <div>{props.temp}</div>
                <div>{props.condition}</div>
                <div>{props.uv}</div>

            </div>

        )


}


export default WeatherDisplay