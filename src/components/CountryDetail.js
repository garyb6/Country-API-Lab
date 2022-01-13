import React from "react";
import Country from "./Country";


const CountryDetail = ({country}) => {
    return (
        <div>
            <p>{country.name.official}</p>

        </div>
    

    )
}

export default CountryDetail