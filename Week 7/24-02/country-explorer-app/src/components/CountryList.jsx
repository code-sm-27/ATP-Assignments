import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

function CountryList() {
    let [country,setCountry] = useState([])
    let [loading,setLoading] = useState(false)
    let [error,setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        async function getCountries() {
            try{
                let res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags")
                if(res.status===200)
                {
                    let countries = await res.json()
                    setCountry(countries)
                }
                else{
                    throw new Error("Failed to Fetch")
                }
            }
            catch(e)
            {
                setError(e)
            }
            finally
            {
                setLoading(false)
            }
        }
        getCountries()

    },[])

    if(loading===true)
    {
      return <p className='text-center text-2xl text-blue-300 '>Loading...</p>
    }
    if(error!==null)
    {
      return <p className='text-center text-2xl text-red-500'>{error.message}</p>
    }

  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 px-10'>
        {country.map((val, index) => (
            <CountryCard key={index} country={val} />
        ))}
    </div>
    </div>
    
  )
}

export default CountryList