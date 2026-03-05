import {useLocation} from 'react-router'


function Product() {

    const { state } = useLocation()
    console.log(state.product)
  return (
    <div className='flex flex-col sm:flex-row justify-between mt-14'>
        <div className='w-2/5'>
            <img src={state.product.prodObj.image} className='w-96' alt="" />
        </div>
        <div className='w-3/5 p-2 sm:p-10'>
            <p className='text-2xl mb-10'>{state.product.prodObj.title}</p>
            <p className='mb-10'>{state.product.prodObj.description}</p>
            <p className='text-3xl mb-10'>{state.product.prodObj.price}</p>
            <p className='text-2xl mb-10'>{state.product.prodObj.category}</p>
        </div>
    </div>
  )
}

export default Product