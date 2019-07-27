import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Logs from './components/Logs/Logs';
import FloatingButton from './components/FloatingButton/FloatingButton';
import AddLogModal from './components/Logs/AddLogModal';
import EditLogModal from './components/Logs/EditLogModal';
import AddTechModal from './components/Techs/AddTechModal';
import TechListModal from './components/Techs/TechListModal';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    //Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <div className='container'>
        <FloatingButton />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  );
};

export default App;
