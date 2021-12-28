import * as React from "react"
import Layout from "../component/layout"
import { Link } from "gatsby"
import Metadata from "../component/metadata"

const NotFound = () => {
  return (
    <Layout>
      <Metadata title="404" description="Error page" />
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/blog/">Check our latest articles</Link>
      </p>
    </Layout>
  )
}

export default NotFound
