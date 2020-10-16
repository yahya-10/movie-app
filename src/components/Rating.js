import React from 'react'

const Rating = ({rate}) => {

    return (
        <div>
            {'⭐'.repeat(rate) + '★'.repeat(5-rate)}
        </div>
    )
}
export default Rating
