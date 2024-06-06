import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import store from './store/Store';
import MyStack from './navigations/MyStack';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MyStack />
      </PaperProvider>
    </Provider>
  );
};

export default App;
