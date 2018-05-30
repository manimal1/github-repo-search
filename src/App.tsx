import * as React from 'react';
import { connect } from 'react-redux';

import { IAppStore } from './StoreModel';

import Profile from './containers/Profile/Profile';

class App extends React.Component<{}, IAppStore> {
  public render() {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default connect()(App);
