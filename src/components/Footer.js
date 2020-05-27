import React from "react"
import PropTypes from 'prop-types'
import SocialLinks from "../components/elements/SocialIconList"

const Footer = ({ siteTitle }) => {
  return (
    <div className="bg-primary-100 w-full mt-12 lg:mt-12">
      <section className="container mx-auto section-spacer">
        <footer className="flex flex-wrap items-center justify-between text-gray-700">
          <div className="w-full text-center lg:w-auto lg:mr-6 mb-4 lg:mb-0">&copy;2020 {siteTitle} • Tel: (+44)131 123 4567</div>
          <SocialLinks />
        </footer>
      </section>
    </div>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: '',
}

export default Footer
