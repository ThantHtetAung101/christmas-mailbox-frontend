import React from 'react'
import star from '../assets/images/star.webp'

const Background = () => {
    return (
        <div className='relative'>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="stars relative">
                <img src={star} alt="star" className='star' />
                <img src={star} alt="star" className='star' />
                <img src={star} alt="star" className='star' />
                <img src={star} alt="star" className='star' />
                <img src={star} alt="star" className='star' />
            </div>
        </div>
    )
}

export default Background