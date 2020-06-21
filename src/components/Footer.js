import React from 'react';

const currentDate = new Date();
const year = currentDate.getFullYear();

// getting the date, then calling the getFullYear method on that date

const Footer = ()=>{
    return(
        <div>
            <p> Copyright { year } </p>
        </div>
    )

}


export default Footer; 