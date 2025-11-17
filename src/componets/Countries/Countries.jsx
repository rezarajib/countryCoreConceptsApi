import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({promiseCountries}) => {
    const countries = use(promiseCountries);
    console.log(countries);
    return (
     <div>
        <h1>This is All Api Ai data For Country :  {countries.length}</h1>
           <div className='countries-container'>

            {
               countries.map(country => <Country country={country}></Country>)
            }
            
        </div>
     </div>
    );
};

export default Countries;