import React, { useState } from 'react';
import Countries from '../Countries/Countries';
import './Country.css'

const Country = ({ country,handleVisitedCountries,handleVisitedFlag }) => {

    const [visited, setVisited] = useState(false);
    // console.log(handleVisitedCountries);
    const handleBtn = () => {
        // if (visited === true){
        //     setVisited (false);
        // }
        // else{
        //     setVisited(true);
        // }
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h2>Country Name: {country.name.common}</h2>

            {/* h2 er niche flag image */}
            <img 
                className="flag"
                src={country.flags.png} 
                alt={country.name.common}
            />

            <p><strong>Official Name:</strong> {country.name.official}</p>
            <p><strong>Capital:</strong> {country.capital?.[0] || "No Capital"}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <button className='country-visited' onClick={handleBtn}> {
                visited ? 'visited' : 'Not Visited'
                } </button>

                <button className='btnFlag' onClick={() => handleVisitedFlag(country.flags.png)}>add visited flag </button>
        </div>
    );
};

export default Country;