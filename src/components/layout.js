import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

import ProfilePicture from "../components/profile-picture"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if ( location.pathname === rootPath ) {
      header = (
        <div>
          <div style={{ height: `200px`, margin: `0 auto 1.45rem`, width: `200px` }}>
            <ProfilePicture />
          </div>
          <h1
            style={{
              ...scale(1.5),
              borderBottom: `none`,
              margin: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to="/"
            >
              {title}
            </Link>
          </h1>
          <h2
            style={{
              borderBottom: `none`,
              marginTop: 0,
              marginBottom: rhythm(1.5),
            }}>
            Software Engineer
          </h2>
        </div>
      )
    } else {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h1>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()} Kevin Herrarte, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          <span role="img" aria-label="love emoji">❤️</span>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
