import React from 'react'

export const CountryInfoShow = ({countryInfo}) => {
  console.log(countryInfo)
  return (
    <div>{countryInfo.name.official}</div>
  )
}
