import React from 'react'
import { useLocation } from 'react-router-dom'
import BigButton from './BigButton.jsx'
import WeatherDisplay from './WeatherDisplay.jsx'

function Home(){
    const location  = useLocation()
    // const {zipcodeEntry} = location.state.zipcodeEntry;

    
    // const { zipcode } = location.state;
    // console.log(zipcode) 
    return (
        <div>
            <h1>HELLO {location.state.nameEntry}!</h1>
            <WeatherDisplay zipcodeEntry = {location.state.zipcodeEntry}/>
            <BigButton />
        </div>
    )
}

export default Home 