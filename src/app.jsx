import React, { useEffect, useState } from 'react'
import { Search } from './search';
import { Country } from './country';

const FIND_BY_NAME_COUNTRY_ENDPOINT = "https://restcountries.com/v3.1/name/";
export const App = () => {
    const [country, setCountry] = useState();    
    
    //Handler to make request
    const handleCountryQuery = (queryResult) =>{
        fetch(`${FIND_BY_NAME_COUNTRY_ENDPOINT}/${queryResult}`)
        .then((result) => result.json())
        .then(data => setCountry(data))
        .catch(error => console.log(error))        
    }
    
  return (
    <>
      <Search onSubmit={handleCountryQuery}></Search>
      {
        country && <Country countryArray = {country}></Country>
      }      
    </>
  )
}
