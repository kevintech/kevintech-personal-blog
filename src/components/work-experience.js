import React from "react"
import styles from "./work-experience.module.css";

function WorkExperience() {
  return (
    <div>
      <h2>Work Experience</h2>
      <ul className={styles.work_experience}>
        <li>
          <span className={styles.work_experience__date}>
            Oct 2018 - Present
          </span>
          <span className={styles.work_experience__company}>
            Viscosity North America
          </span>
          <span className={styles.work_experience__position}>
            Software Engineer
          </span>
          <p>
          Provide Oracle-platform oriented solutions, 
          working with an Agile Team to successfully 
          deliver web solutions including but not limited to Oracle APEX.
          </p>
        </li>
        <li>
          <span className={styles.work_experience__date}>
            Apr 2016 - Oct 2018
          </span>
          <span className={styles.work_experience__company}>
            Autoweb Inc., an Autobytel company
          </span>
          <span className={styles.work_experience__position}>
            Software Engineer
          </span>
          <p>
            Provide object-oriented software design;
            developing and supporting a CMS web solution.
            Autoweb is an automotive media and marketing services
            company leader in North America.
          </p>
        </li>
        <li>
          <span className={styles.work_experience__date}>
            Jan 2016 - Mar 2016
          </span>
          <span className={styles.work_experience__company}>
            INFOM Guatemala
          </span>
          <span className={styles.work_experience__position}>
            Full-stack web developer
          </span>
          <p>
            Successfully delivered a high-performed web solution that
            provides the employees manage their resources communication
            in a easy and efficient way
          </p>
        </li>
        <li>
          <span className={styles.work_experience__date}>
            Dec 2011 - Dec 2015
          </span>
          <span className={styles.work_experience__company}>
            Research Mobile
          </span>
          <span className={styles.work_experience__position}>
            Full-stack web developer
          </span>
          <p>
            Lead front end developer designing and implementing
            mobile and desktop web solutions. Completed eight major projects,
            working closely with agile development team to develop,
            test and maintain Web and mobile-based software applications.
          </p>
        </li>
        <li>
          <span className={styles.work_experience__date}>
            Mar 2009 - Nov 2011
          </span>
          <span className={styles.work_experience__company}>
            Multiple Freelance
          </span>
          <span className={styles.work_experience__position}>
            Junior Developer
          </span>
          <p>
            Desktop applications and Front-end websites
            development using Java, Javascript, PHP, and
            many other web technologies.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default WorkExperience
