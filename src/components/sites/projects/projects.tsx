import React from 'react'
import styles from './projects.module.scss'
import UnityGameProject from './unityGameProject'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <p>Here you can check out all the projects I've been working on.</p>
      <a href="https://www.youtube.com/watch?v=F_TV4vZRSE8&list=PL-CmxXOSdR4Yx29FuG4__hcb1qW3YzsEt&index=5" target='_blank' rel='noreferrer'>Cool song</a>
      
      <div className={styles.projectsContainer}>
        <UnityGameProject embedURL='https://play.unity3dusercontent.com/webgl/ce528440-1925-406c-bfd7-34755a8ed2fa?screenshot=false&embedType=embed' />
      </div>

    </div>
  )
}

export default Projects
