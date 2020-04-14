import React from 'react';
import axios from 'axios';
import { Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navbar from './navigation/Navbar'
import ContactCreate from './ContactCreate'
import ContactDelete from './ContactDelete'
import ContactShow from './ContactShow'
import ContactEdit from './ContactEdit'
import history from '../history'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contacts/new" exact component={ContactCreate} />
              <Route path="/contacts/delete/:id" exact component={ContactDelete} />
              <Route path="/contacts/show/:id" exact component={ContactShow} />
              <Route path="/contacts/edit/:id" exact component={ContactEdit} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
