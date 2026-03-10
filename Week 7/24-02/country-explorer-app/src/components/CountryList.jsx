import { useEffect, useState } from 'react'


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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center'>
        {country.map((val,index)=><div key={index} className='shadow-md p-10 rounded-2xl'>
            <p className='text-4xl'>{val.name.common}</p>
            <p>{val.name.official}</p>
        </div>)}
        </div>
    </div>
    
  )
}

export default CountryList