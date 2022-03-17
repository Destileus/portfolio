import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      <p>Check out my Cv, and that's pretty much it.</p>
      
    </div>
  )
}

export default Cv
