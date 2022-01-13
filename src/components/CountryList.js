import React from 'react'
import Country from './Country'

const CountryList = ({countryList, onCountryClick}) => {

    const listOfCountries = countryList.map((country, index) => {
        return <Country  key={index} onCountryClick={onCountryClick} country={country}/>
    })


    return(
        <ul>{listOfCountries}</ul>
    )

}

export default CountryList;