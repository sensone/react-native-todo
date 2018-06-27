import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import List from './containers/List';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}
