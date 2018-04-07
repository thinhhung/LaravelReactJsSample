
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import React from 'react'
import { render } from 'react-dom'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import UserList from './components/UserList'
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const history = createBrowserHistory()
render (
  <Router history={history}>
    <Switch>
      <Route path='/users/create' component={CreateUser} />
      <Route path='/users/edit/:id' component={EditUser} />
      <Route path='/' component={UserList} />
    </Switch>
  </Router>, document.getElementById('app'))
