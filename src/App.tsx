// App.tsx
import React from 'react'
import MyFirstComponent from './components/MyFirstComponent'
import SomeExampleComponent from './components/example/someExampleComponent';


const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <SomeExampleComponent />
    </div>
  )
}

export default App