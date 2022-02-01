// App.tsx
import React from 'react'
import MyFirstComponent from './components/MyFirstComponent'
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/clickCount';

type AppProps = {

}

const App: React.FC = () => {
  return (
    <div>
      <ClickCount/>
      <MyFirstComponent/>
      <SomeExampleComponent/>
    </div>
  )
}

export default App