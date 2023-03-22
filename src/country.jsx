import React from "react"
import { CountryInfoShow } from "./countryInfoShow"

export const Country = ({countryArray}) =>{    
    return (
        <div>
            {                                
                countryArray.map((countryInfoRow,i) => (
                    <CountryInfoShow key={i} countryInfo = {countryInfoRow}/>
                  ))
            }
        </div>
    )
}