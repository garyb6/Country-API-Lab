import React, {useState, useEffect} from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';

const CountryContainer = () => {

    const [countryList, setCountryList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)

    const getCountries = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountryList(data));
    }

    useEffect(() => {
        getCountries();
    }, [])

    const onCountryClick = (country) => {
        setSelectedCountry(country)
    }

    return(
        <div>
        <h2>All of the Countries</h2>
        <CountryList countryList={countryList} onCountryClick={onCountryClick}/>
        {selectedCountry ? <CountryDetail country = {selectedCountry}/> : null}
        </div>
    )

}

export default CountryContainer