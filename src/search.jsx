import React, { useState } from 'react'
export const Search = ({onSubmit}) => {
    const [query, setQuery] = useState("");    
    
    const handleForm = (event) =>{
        event.preventDefault();
        onSubmit(query)
    }

    const handleChange = (event) =>{        
        setQuery(event.target.value)
    }
    
    return (
        <form className='p-4 m-1 bg-blue-400' onSubmit={handleForm}>
            <input className='p-1' placeholder='Find a country please!' onChange={handleChange} value={query}/>
            <button type='submit' className='px-4 py-2 bg-blue-600 text-white'>Search</button>
        </form>
    )
}
