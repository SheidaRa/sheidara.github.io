import React from 'react'

const Hamburger = ({ expandedBurger }) => {
    return (
        <div className={`burger ${expandedBurger ? "opened" : "closed"} `}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Hamburger