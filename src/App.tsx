// App.tsx
import React from 'react'
import styles from './App.module.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './components/sites/main/main';
import Projects from './components/sites/projects/projects';
import Cv from './components/sites/cv/cv';
import Navbar from './components/navbar/navbar';

const App: React.FC = () => {
  return (
       // Important! add your repositoryname to basename
    <div className={styles.container}>
      <Router basename='/portfolio'>
      
      <Navbar />
 
      <Switch>
        {/* Changing content comes here */}
        <Route exact path='/' component={Main} />
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/cv' component={Cv}/>
      </Switch>
 
       {/* The footer and other components you want to display on all pages come here */}
       {/* <ClickCount /> */}
 
     </Router>

    </div>
  )
}

export default App
