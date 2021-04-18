import '../public/style.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import NavBar from './components/NavBar';
import {Router} from 'react-router-dom'
import history from './history'
import axios from 'axios';

const App = () => {
  const [me, setMe] = useState({})

  const getMe = async () => {
    try {
      const {data: me} = await axios.get('/auth/me')
      setMe(me)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div>
      <NavBar/>
      <div className="container">
        <Routes setMe={setMe}/>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
);

export default App;
