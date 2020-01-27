import React from 'react'
import { GifItem } from '../styled-components'

const Stickers = ({giphy}) => {
    return(
        <GifItem>
            <img src={giphy.images.fixed_height.url} />
        </GifItem>
    )
}

export default Stickers