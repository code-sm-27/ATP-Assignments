import { useEffect, useRef } from 'react'

function SearchBar({ onSearch }) {
    let inputRef = useRef(null)
    let timerRef = useRef(null)

    useEffect(() => {
        // Auto-focus the input on page load
        inputRef.current.focus()
    }, [])

    const handleSearch = (e) => {
        let value = e.target.value

        // Clear the old timer if the user is still typing
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }

        // Set a new timer for 500ms
        timerRef.current = setTimeout(() => {
            onSearch(value)
        }, 500)
    }

    return (
        <div className='text-center m-8'>
            <input 
                type="text" 
                ref={inputRef}
                onChange={handleSearch}
                placeholder="Search for a country..." 
                className='border-2 border-gray-300 p-2 w-1/2 rounded-lg'
            />
        </div>
    )
}

export default SearchBar