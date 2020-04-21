import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navbar from './navigation/Navbar'
import ContactCreate from './ContactCreate'
import ContactDelete from './ContactDelete'
import ContactShow from './ContactShow'
import ContactEdit from './ContactEdit'
import history from '../history'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'


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
              <Route path="/signin" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
