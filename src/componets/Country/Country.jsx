import React from 'react';
import Countries from '../Countries/Countries';

const Country = ({country}) => {
    console.log(country);
    return (
        <div>
             <h2>Country Name: {country.name.common}</h2>
            <p><strong>Official Name:</strong> {country.name.official}</p>
            <p><strong>Capital:</strong> {country.capital?.[0] || "No Capital"}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population}</p>
        </div>
    );
};

export default Country;