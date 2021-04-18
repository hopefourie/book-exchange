import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import Feed from './components/Feed'
import Map from './components/Map'
import Inbox from './components/Inbox'
import Profile from './components/Profile'
import Auth from './components/Auth'


class Routes extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/map" component={Map} />
        <Route exact path="/inbox" component={Inbox} />
        <Route path="/profile" component={Profile} />
        <Route
          path="/login"
          render={(props) => (
            <Auth {...props} displayName="Login" setMe={props.setMe}/>
          )}
        />
        <Route
          path="/signup"
          render={(props) => (
            <Auth {...props} displayName="Signup" />
          )}
        />
      </Switch>
    )
  }
}


export default withRouter(Routes)
