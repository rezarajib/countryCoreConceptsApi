import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({promiseCountries}) => {
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])
    const countries = use(promiseCountries);
    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlag);
        // console.log('flag is added',flag);
    }
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
        {/* <h2 className='travling-s0-far'>Traveling so far ::{visitedCountries.length}</h2> */}
        <h2 className='travling-s0-far'>show Flag : </h2>
        <div className='visitedFlag'>
            {
                visitedFlags.map(flag => <img src={flag}></img>)
            }
        </div>
        <h2 className='travling-s0-far'>Traveling so far ::{visitedCountries.length}</h2>
        <ol className='totalCountry'>
            {
                visitedCountries.map(country => <li>{country.name.common}</li>)
            }
        </ol>
           <div className='countries-container'>

            {
               countries.map(country => <Country handleVisitedCountries = {handleVisitedCountries}
                handleVisitedFlag= {handleVisitedFlag}
                country={country}></Country>)
            }
            
        </div>
     </div>
    );
};

export default Countries;