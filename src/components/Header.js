import React, { useState } from 'react'
import { HeaderContainer } from '../styled-components.js'
import { Link } from 'react-router-dom'

const Header = ({setQuery}) => {

    const [search, setSearch] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }
    return(
        <HeaderContainer>
            <Link to='/stickers'>Stickers</Link>
            <Link to='/'>Gifs</Link>
            <form onSubmit={handleSubmit}>
                <input type='text' name='query' value={search} placeholder='Search' onChange={e => setSearch(e.target.value)} />
                <button type='Submit'>Submit</button>
            </form>
        </HeaderContainer>
    )
}

export default Header