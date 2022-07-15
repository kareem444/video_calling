import React from 'react'
import store from './src/controller/store'
import { Provider } from 'react-redux'
import Main from './src/view/main'

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App