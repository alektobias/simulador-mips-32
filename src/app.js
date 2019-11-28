import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './Styles/global';
import Routes from './routes';
import store from './Store';

function App() {
  return (
    <Provider store={store}>  
      <Routes/>
      <GlobalStyle/>
    </Provider>
  )
}

export default App;
