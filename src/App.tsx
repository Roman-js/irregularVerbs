import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Router from './navigations/RootNavigation';
import './localization/i18n';
import {store} from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
