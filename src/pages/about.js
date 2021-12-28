import React from "react"
import Layout from "../component/layout"
import Metadata from "../component/metadata"

const About = () => {
  return (
    <Layout>
    <Metadata title="About" description="This is my about page" />
    <h1>About Page</h1>
    <h2>I am a full stack web developer.</h2>
  </Layout>
  )
}

export default About