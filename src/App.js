import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from './stores';
import { Defaultlayout } from './views';
import './App.scss';


class App extends React.Component {
  render() { 
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact name="Home" path="/" component={Defaultlayout} />
            <Route exact name="Register" path="/register" component={Defaultlayout} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
