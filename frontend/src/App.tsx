import React from 'react';
import 'antd/dist/antd.css';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import EmployeeProvider from './context';

function App() {
  return (
    <>
      <EmployeeProvider>
        <Routes />
      </EmployeeProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
