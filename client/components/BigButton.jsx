import React, { useState, useEffect } from 'react'

function BigButton(){
    //Send to backend:
        // Make request to /api/submit
        // POST
        // BODY: {username: 'username', date: 'string', points: 'number'}
        // response.body: number


    const [isOutside, switchOutside] = useState(false);
    

    useEffect(() => {
        console.log('bigbutton clicked, am I outside?', isOutside)
    })

    const handleClick = () => switchOutside(!isOutside);

    return (
        <div>
            <button onClick={handleClick}>
                {isOutside ? 'YOU\'RE OUTSIDE! GO INSIDE?' : 'YOU\'RE INSIDE! GO OUTSIDE?'}
            </button>
           
        </div>
    )

}


export default BigButton; 