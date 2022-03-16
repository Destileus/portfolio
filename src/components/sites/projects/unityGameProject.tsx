import React from 'react';
import styles from './unityGameProject.module.scss'

type UnityGameProjectProps = {
    embedURL: string
}

const UnityGameProject: React.FC<UnityGameProjectProps> = ({ embedURL }) => {
  return (
    <div className={styles.container}>
        <iframe
            id='webgl_iframe'
            height="100%"
            width="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; vr"
            allowFullScreen={true}
            src={embedURL}
        />
    </div>
  )
}

export default UnityGameProject
