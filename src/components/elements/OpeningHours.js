import React from "react"
import hours from "../../data/openinghours.js"

const OpeningHours = () => {
    return (
        <>
        {hours.map((item,index) => {
            return(
            <li key={index}>
            <b>{item.day}</b>: {item.hours}
            </li>
            )
        })}
        </>
    )
}

export default OpeningHours