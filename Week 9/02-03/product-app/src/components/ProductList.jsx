import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'

function Products() {

  let [product,setProducts] = useState([])
  // let [updatedProd, setUpdatedProd] = useState([])
  let [loading,setLoading]=useState(false)
  let [error,setError] = useState(null)
  const navigate = useNavigate() 
  
  const {register,handleSubmit,watch} = useForm()
  const s = watch("search", "")
  // Navigate to Product Component
  const gotoProduct = (prodObj)=>{
    // Navigation Logic
    // While Navigating, transfer Product Obj too
      navigate('/product',{state: {product:{prodObj}}})
    }
  
  useEffect(()=>
    {
    setLoading(true)
    async function getProducts() {
        try
        {
        let res = await fetch("https://fakestoreapi.com/products")
        if(res.status === 200)
        {
          // Extract Data
          let products = await res.json()
          // Update State
          setProducts(products)
          // setUpdatedProd(products)
        }
        else
        {
          throw new Error("Failed to Fetch")
        }
      }
      catch(err)
      {
        setError(err)
      }
      finally
      {
        setLoading(false)
      }

    }
    getProducts()
    },[])
    
    if(loading===true)
    {
      return <p className='text-center text-2xl text-blue-300 '>Loading...</p>
    }
    if(error!==null)
    {
      return <p className='text-center text-2xl text-red-500'>{error.message}</p>
    }
  // const search =(obj)=>{
  //   if(obj.search!=="")
  //     {
  //       let res = product.filter((prodObj)=>prodObj.category===obj.search)
  //       setUpdatedProd(res)
  //     }
  //   else{
  //     setUpdatedProd(product)
  //   }
  const updatedProd = product.filter((prodObj)=>{
    if(s===""){
      return true      
    }
  return(prodObj.category.toLowerCase().startsWith(s.toLowerCase()))})
    
  
  return (
    <div className='text-center'>
        {/* <form onSubmit={handleSubmit(search)}> */}
        <input type="text" {...register("search")}placeholder='Enter' className='border rounded mt-5'/>
        {/* <button type="submit" className='bg-blue-400 rounded p-1'>Search</button> */}
        {/* </form> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10 text-center'>
        {updatedProd.map((prodObj)=><div onClick={()=>gotoProduct(prodObj)} key ={prodObj.id} className='shadow-md p-10 rounded-2xl'>
          <img src={prodObj.image} className="h-44 object-contain block mx-auto mb-10"alt="" />
          <p>{prodObj.title}</p>
        </div>)}
      </div>
    </div>
  )
}

export default Products
