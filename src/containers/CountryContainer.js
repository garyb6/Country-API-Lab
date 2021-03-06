import React, {useState, useEffect} from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';
import './CountryContainer.css'
import FavCountryList from '../components/FavCountryList';
import FavCountryForm from '../components/FavCountryForm';

const CountryContainer = () => {

    const [countryList, setCountryList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [favList, setFavList] = useState([]);

    
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

    const addCountry = (submittedCountry) => {
        // if (favList.includes(submittedCountry) ===false){
        submittedCountry.id = Date.now();
        const updatedCountries = [...favList, submittedCountry]
        setFavList(updatedCountries)
        

    }

    return(
        <>
        <h2>All of the Countries</h2>
        <div className="MainList">
        <CountryList countryList={countryList} onCountryClick={onCountryClick}/>
        {selectedCountry ? <CountryDetail country = {selectedCountry}/> : null}
        </div>
        <FavCountryList favList={favList}/>
        <FavCountryForm onCountrySubmit={(favCountry) => addCountry(favCountry)}/> 
        </>
    )

}

export default CountryContainer