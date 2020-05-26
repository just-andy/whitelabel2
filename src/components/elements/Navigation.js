import React from "react"
import { Link } from "gatsby"

import Pages from "../../data/navigation"

const Navigation = () => {
  return (
    <ul className="md:flex md:flex-grow md:items-center w-full md:w-auto py-1">
      {Pages.map((page, index) => {
        return (
          <li key={index}>
            <Link
              to={page.url}
              activeClassName="active"
              className="block mt-4 mr-6 md:mt-0  md:inline-block"
            >
              {page.name}
            </Link>
          </li>
        )
      })}
      <li>
        <Link
          to="/book-now"
          className="btn btn-primary"
          activeClassName="btn-primary-active"
        >
          Book
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
