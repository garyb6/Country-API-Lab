import React from 'react'
import Country from './Country'

const CountryList = ({countryList, onCountryClick}) => {

    const listOfCountries = countryList.map((country, index) => {
        return <Country name={country.name.common} population={country.population} key={index} onCountryClick={onCountryClick}/>
    })


    return(
        <ul>{listOfCountries}</ul>
    )

}

export default CountryList;