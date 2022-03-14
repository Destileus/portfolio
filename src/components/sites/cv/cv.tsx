import React from 'react'
import styles from './cv.module.scss'

type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div className={styles.container}>
      Check out my CV and yeah that's pretty much it.
    </div>
  )
}

export default Cv
