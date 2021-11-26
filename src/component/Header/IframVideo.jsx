import React from 'react'
import video from './produc.mp4'

export const IframVideo = () => {
    return (
        <div>
            <iframe src={video} frameborder="0" title="video">watch</iframe>

        </div>
    )
}
