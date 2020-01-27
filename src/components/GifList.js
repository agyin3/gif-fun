import React from 'react'
import Gif from './Gif.js'
import { GifContainer } from '../styled-components'

const GifList = props => {
    return(
        <GifContainer>
            {props.gifs && props.gifs.map(giphy => {
               return (
                    <Gif key={giphy.id} giphy={giphy} />
               )
            })}
        </GifContainer>
    )
}

export default GifList