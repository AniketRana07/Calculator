import React from 'react'

const Button = ({ callback, value, className }) => {
    return (
        <button className={className} onClick={(e) => callback(e.target.innerHTML)}>{value}</button>
    )
}

export default Button