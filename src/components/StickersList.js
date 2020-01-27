import React from 'react'
import Stickers from './Stickers.js'
import { GifContainer } from '../styled-components'

const StickersList = props => {
    return(
        <GifContainer>
            {props.stickers && props.stickers.map(giphy => {
               return (
                    <Stickers key={giphy.id} giphy={giphy} />
               )
            })}
        </GifContainer>
    )
}

export default StickersList