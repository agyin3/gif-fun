import React from 'react'

const Header = () => {
    return(
        <div>
            <form>
                <input type='text' name='query' placeholder='Search' />
                <button type='Submit'>Submit</button>
            </form>
        </div>
    )
}

export default Header