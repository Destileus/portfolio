import React from 'react'
import styles from './main.module.scss'
import bigheadimg from '../../../media/bighead.jpg'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Daniel Araneva</h1>
      <p>I develop things. Been doing that for a while now.</p>
      <p>Pay respect for the mighty big head.</p>
      
      <img src={bigheadimg} alt='not found lol'/>
    </div>
  )
}

export default Main
