import React from 'react'
import styles from './projects.module.scss'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
    <p>Here you can check out all the projects I've been working on.</p>
    </div>
  )
}

export default Projects
