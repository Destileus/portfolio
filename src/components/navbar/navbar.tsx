import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <Link to='/'>
             
            </Link>
        </div>
        <Link to='/'>Front page</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/cv'>Cv</Link>
    </div>
  )
}

export default Navbar
