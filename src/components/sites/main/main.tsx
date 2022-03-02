import React from 'react'
import styles from './main.module.scss'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Daniel Araneva</h1>
      <p>Not a professional, I just write code, and sometimes it works.</p>
    </div>
  )
}

export default Main
