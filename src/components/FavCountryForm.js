import React, {useState} from 'react';


const FavCountryForm = ({onCountrySubmit}) => {

    const [favCountry, setFavCountry] = useState("")


    const handleCountryChange = (event) => {
        setFavCountry(event.target.value)

    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const countryToSubmit = favCountry.trim()

        if (!countryToSubmit) {return}
    

    onCountrySubmit(
        {country: countryToSubmit}
    )
    setFavCountry("")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Favourite Country"
                value={favCountry}
                onChange={handleCountryChange}
            />
            <input type="submit" value='Post'/>

        </form>
    )

}

export default FavCountryForm