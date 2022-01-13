import React from "react";
import Country from "./Country";


const CountryDetail = ({country}) => {
    return (
        <div>
            <p>{country.name.official}</p>
            <img src={country.flags.png}></img>

        </div>
    

    )
}

export default CountryDetail