import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"
import Skills from "../components/skills"
import WorkExperience from "../components/work-experience"
import ContactLinks from "../components/contact-links"
import Education from "../components/education"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Kevin Herrarte"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Hello World"
          keywords={[`kevintech`, `c#`, `javascript`, `react`, `react-native`, `plsql`, `oracle apex`, `software engineer`, `guatemala`]}
        />
        <p style={{textAlign: `justify`}}>
          Currently an Oracle Application Express Developer at
          {` `}
          <a href="https://viscosityna.com/" target="_blank" rel="external">Viscosity North America</a>.
          {` `}
          Offering 10+ years of experience in the full software development lifecycle, 
          from concept through delivery of web and mobile oriented solutions. Expert in advanced methodologies, 
          tools and processes contributing to the design and rollout of software applications.
        </p>
        <ContactLinks />
        <Skills />
        <WorkExperience />
        <Education />
        {/* <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link> */}
      </Layout>
    )
  }
}

export default IndexPage
