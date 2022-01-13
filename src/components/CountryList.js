import React from 'react'
import Country from './Country'

const CountryList = ({countryList}) => {

    const listOfCountries = countryList.map((country, index) => {
        return <Country name={country.name.common} population={country.population} key={index}/>
    })

    return(
        <ul>{listOfCountries}</ul>
    )

}

export default CountryList;