import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            welcome to <br />
            the party
          </h1>
          <p> gibbrishgibbrishgibbrishgibbrishgibbrish</p>
          <p> gibbrishgibbrishgibbrishgibbrishgibbrish</p>
          <p> gibbrishgibbrishgibbrishgibbrishgibbrish</p>

          <Link to="/page-2/">Watch the video</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
