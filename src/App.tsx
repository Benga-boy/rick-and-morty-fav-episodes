import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Favourites from './components/Favourites';
import Landing from './components/Landing';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/favs" component={Favourites} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
