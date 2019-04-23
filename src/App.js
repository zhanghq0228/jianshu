import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/header/Header';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import Write from './pages/write/write';
import { Provider } from 'react-redux';
import store from './store/index';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Header />
            <Route exact path='/' component={Home}></Route>
            <Route path='/detail/:id' component={Detail}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/write' component={Write}></Route>
        </Router>
      </Provider>
    );
  }
}
export default App;
