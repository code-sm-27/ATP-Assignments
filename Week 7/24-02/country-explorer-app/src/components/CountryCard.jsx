import React from 'react'

function CountryCard({ country }) {
  return (
    <div className='shadow-md p-5 rounded-2xl text-left bg-white'>
        <img 
            src={country.flags.png} 
            alt={country.flags.alt || "Flag"} 
            className='w-full h-32 object-cover rounded-md mb-4'
        />
        <p className='text-2xl font-bold mb-2'>{country.name.common}</p>
        
        {/* Some countries don't have capitals, so we do a quick check */}
        <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Region:</strong> {country.region}</p>
    </div>
  )
}

export default CountryCard