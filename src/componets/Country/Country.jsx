import React from 'react';
import Countries from '../Countries/Countries';
import './Country.css'

const Country = ({ country }) => {
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
        </div>
    );
};

export default Country;