import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

import Navigation from "./elements/Navigation"

const Header = ({ siteTitle }) => {

  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <div className="container mx-auto py-4">
      <div className="md:flex md:justify-between">
        <div className="flex justify-between">
          <Link to="/">
            <span className="text-3xl font-bold md:py-4">{siteTitle}</span>
          </Link>
          <button
            type="button"
            className="btn btn-primary my-1 md:hidden"
            onClick={toggleNav}
          >
            Menu
          </button>
        </div>

        <div
          className={isOpen ? `block md:block` : `hidden md:block`}
        >
          <Navigation />
        </div>
      </div>
    </div>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
