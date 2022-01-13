import React from 'react';



const Country = ({country, onCountryClick}) => {
    
    const handleClick = () => onCountryClick(country);

    return(

        <li onClick={handleClick}>{country.name.common} {country.population}</li>
    )

}

export default Country;