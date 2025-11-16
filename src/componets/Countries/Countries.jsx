import React, { use } from 'react';

const Countries = ({promiseCountries}) => {
    const countries = use(promiseCountries);
    console.log(countries);
    return (
        <div>
            <h1>This is All Api Ai data For Country :  {countries.length}</h1>
            
        </div>
    );
};

export default Countries;