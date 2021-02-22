import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Everyone</h1>
    <p>Welcome to our Contenful blog post.</p>
    <p>Developed by Athar Rasool</p>
    
    <Link to="/blog/" className='btn_visit'>Click Here for Blog Page</Link>
 <br />
  </Layout>
)

export default IndexPage
