import React from 'react'
import styles from './projects.module.scss'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      Here you can check out all of my projects I've been working on.
    </div>
  )
}

export default Projects
