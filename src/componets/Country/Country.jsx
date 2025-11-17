import React, { useState } from 'react';
import Countries from '../Countries/Countries';
import './Country.css'

const Country = ({ country }) => {

    const [visited, setVisited] = useState(false);
    const handleBtn = () => {
        setVisited (true);
    }
    return (
        <div className='country'>
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
            <button onClick={handleBtn}> {
                visited ? 'visited' : 'Not Visited'
                } </button>
        </div>
    );
};

export default Country;