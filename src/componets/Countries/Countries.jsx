import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({promiseCountries}) => {
    const [visitedCountries,setVisitedCountries] = useState([])
    const countries = use(promiseCountries);
    const handleVisitedCountries = (country) => {
        console.log('country visited clicked to be word',country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
        // visitedCountries.push(newVisitedCountries);
        // console.log(visitedCountries);
    }
    console.log(countries);
    return (
     <div>
        <h1>This is All Api Ai data For Country :  {countries.length}</h1>
        <h2>Traveling so far ::{visitedCountries.length}</h2>
           <div className='countries-container'>

            {
               countries.map(country => <Country handleVisitedCountries = {handleVisitedCountries} country={country}></Country>)
            }
            
        </div>
     </div>
    );
};

export default Countries;