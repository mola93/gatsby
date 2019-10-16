import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import sellox from "../images/log.png"
import "./Header.css"
const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={sellox} width="30" />
      </Link>
      <Link to="/courses"> Courses</Link>
      <Link to="/courses">Downloads </Link>
      <Link to="/courses"> WorkShops</Link>
      <Link to="/courses">
        <button> Login</button>
      </Link>
      <Link to="/courses">
        <button> Getting Started</button>
      </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
