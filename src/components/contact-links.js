import React from "react"
import styles from "./contact-links.module.css";

function ContactLinks() {
  return (
    <ul className={styles.contact_links}>
      <li>
        <span role="img" aria-label="email emoji">✉️</span> {" "}
        <a href="mailto:hello@kevintech.ninja">hello@kevintech.ninja</a>
      </li>
      <li>
        <a href="https://linkedin.com/in/kherrarte" target="_blank">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/kevintech" target="_blank">GitHub</a>
      </li>
      <li>
        <a href="https://facebook.com/kevintech" target="_blank">Facebook</a>
      </li>
    </ul>
  )
}

export default ContactLinks
