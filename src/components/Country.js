import React from 'react';


const Country = ({name, population, onCountryClick}) => {
    
    const handleClick = () => onCountryClick(name);

    return(

        <li onClick={handleClick}>{name} {population}</li>
    )

}

export default Country;