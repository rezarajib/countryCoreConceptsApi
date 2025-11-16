import { Suspense } from 'react';
import './App.css'
import Countries from './componets/Countries/Countries'

function App() {
 const promiseCountries = fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region")
 .then(res => res.json());
 


  return (
    <>
  
      <h1> Api Data Load For Country </h1>

      <Suspense fallback ={<h1>Hi fnd You Are Api Data</h1>}>
        <Countries promiseCountries = {promiseCountries}></Countries>
      </Suspense>


 
      
    </>
  )
}

export default App
