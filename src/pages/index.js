import React from "react"
import Layout from "../component/layout"
import Metadata from "../component/metadata"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h1>Home page</h1>
      <h2>I'm Chantelle, I am currently learning Gatsby.js</h2>
    </Layout>
  )
}

export default Index