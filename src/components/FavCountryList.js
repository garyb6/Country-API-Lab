import React from 'react';
import FavCountry from './FavCountry'

const FavCountryList = ({favList}) => {

    const favCountryNodes = favList.map(favCountry => {
        return (
            <FavCountry favCountry={favCountry.country} key={favCountry.id}/>
        )
    }
        )

    return (
        <>
            <h4> Favourite Countries</h4>
            <ul>{favCountryNodes}</ul>
        </>
    ) 

}

export default FavCountryList;