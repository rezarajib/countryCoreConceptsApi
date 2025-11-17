import React, { useState } from 'react';
import './Country.css';

const Country = ({ country }) => {

    const [visited, setVisited] = useState(false);

    const handleBtn = () => {
        setVisited(!visited);   // toggle true/false
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

            {/* visited text */}
            <p className='visit-status'>
                Status: {visited ? "Visited" : "Not Visited"}
            </p>

            <button 
                className='visit-btn'
                onClick={handleBtn}
            >
                {visited ? "Mark as Not Visited" : "Mark as Visited"}
            </button>
        </div>
    );
};

export default Country;
