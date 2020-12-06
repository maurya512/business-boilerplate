import React from 'react'
import PropTypes from 'prop-types'


const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                {/* if rating >= 1 display a full star, if >= 0.5 display a half-star and else display no star */}
                <i style={{ color }} className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'} ></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'} ></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 3 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'} ></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'} ></i>
            </span>
            <span>
                <i style={{ color }} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} ></i>
            </span>
            {/* if text exists display the text */}
            <span>{text && text}</span>
        </div>
    )
}

// set the default prop color to yellow
Rating.defaultProps = {
    color: '#f8e825',
}

// set the default prop types to 
Rating.propTypes = {
    value: PropTypes.number,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}
export default Rating
