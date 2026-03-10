import { useTest } from '../store/TestStore'


function A() {
    let x = useTest((state)=> state.x)
    let incrementX = useTest((state)=> state.incrementX)
    let incrementXByValue = useTest((state)=> state.incrementXByValue)
    console.log("Component A rendered")
  return (
    <div>
        <div className='text-center shadow-2xl p-5'>
        <p className='text-2xl'>Component A</p>
        <p>x is:- {x}</p>
        <button onClick={incrementX} className='bg-blue-400 mt-5 p-2 rounded'>Increment X</button><br />
        {/* <p className='mt-2'>y is:- {y}</p>
        <button onClick={incrementY} className='bg-blue-400 mt-5 p-2 rounded'>Increment Y</button><br /> */}
        <button onClick={()=>incrementXByValue(20)} className='bg-blue-400 mt-5 p-2 rounded'>Increment X By Value</button><br />
        </div>
    </div>
  )
}

export default A