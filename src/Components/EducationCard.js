import React from 'react'

const EducationCard = ({ school, place, image }) => {
    return (
        <div className='education-card'>
            <div className='education-img'>
                <img src={image} />
            </div>
            <h3>{school}</h3>
            <h4>{place}</h4>
        </div>
    )
}

export default EducationCard