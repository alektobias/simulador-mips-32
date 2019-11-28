import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './Styles/global';
import store from './Store';
import Home from './Pages/Home';

function App() {
  return (
    <Provider store={store}>  
      <Home />
      <GlobalStyle/>
    </Provider>
  )
}

export default App;
