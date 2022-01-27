import React from 'react'
import styles from './someExampleComponent.module.scss'

type SomeComponentsExampleProps = {

}

const SomeExampleComponent: React.FC<SomeComponentsExampleProps> = () => {
  return (
    <div className={styles.container}>
        <h1>Header</h1>
        <p>My supercool component</p>
    </div>
  )
}

export default SomeExampleComponent
