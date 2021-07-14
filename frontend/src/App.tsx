import React from 'react';
import 'antd/dist/antd.css';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import AuthProvider from './context';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
