import React from 'react'

const Testimonial = props => {
    return (
    <blockquote className="border-l-4 pl-4 border-secondary-700">
        <div className="text-1xl lg:text-3xl mb-4 text-gray-700"> {props.quote}</div>
        <cite href="#" className="text-secondary-700">{props.cite}</cite>
    </blockquote>
    )
}

export default Testimonial