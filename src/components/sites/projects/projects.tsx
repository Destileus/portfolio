import React from 'react'
import styles from './projects.module.scss'
import UnityGameProject from './unityGameProject'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <p>Here you can check out all the projects I've been working on.</p>
      

        <div className={styles.projectsContainer}>
          <UnityGameProject embedURL='https://play.unity3dusercontent.com/webgl/5e3ca467-14db-4613-96d6-b5ff66a02f1d?screenshot=false&embedType=embed' />
          <UnityGameProject embedURL='https://play.unity3dusercontent.com/webgl/b5460726-11f8-4393-95d9-8a662edd2139?screenshot=false&embedType=embed' />
      </div>

    </div>
  )
}

export default Projects
