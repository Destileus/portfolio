import React, { useState, useEffect } from 'react';
import styles from './clickCount.module.scss'
type ClickCountProps = {

}
  // Declare a new state variable, which we'll call "count"

    const ClickCount: React.FC<ClickCountProps> = () => {
  
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count])
  
  return (
    <div className = {styles.container}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default ClickCount