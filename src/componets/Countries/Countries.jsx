import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({promiseCountries}) => {
    const countries = use(promiseCountries);
    console.log(countries);
    return (
        <div>
            <h1>This is All Api Ai data For Country :  {countries.length}</h1>

            {
               countries.map(country => <Country country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;