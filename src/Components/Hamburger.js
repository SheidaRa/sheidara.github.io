import React, { useEffect, useState } from 'react'

const Hamburger = ({ expandedBurger }) => {

    const [handleInternalClick, setHandleInternalClick] = useState(() => () => { })

    useEffect(() => {
        if (expandedBurger) {
            setHandleInternalClick(() => (event) => {
                event.stopPropagation()
            })
        }
        else {
            setHandleInternalClick(() => () => { })
        }
    }, [expandedBurger])

    return (
        <div className={`burger ${expandedBurger ? "opened" : "closed"} `}>
            <div onClick={handleInternalClick}></div>
            <div onClick={handleInternalClick}></div>
            <div onClick={handleInternalClick}></div>
        </div>
    )
}

export default Hamburger