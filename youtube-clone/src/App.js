import React from 'react';
import './App.css';

import Header from './components/Header'
import RecommendedVideos from './components/RecommendedVideos';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (

    <Router>
      <Header />
      <Switch>
        <Route path="/search/:searchTerm" exact 
          render={(props) => (
            <div className="app">
              <div className="app__page">
                <Sidebar />
                <SearchPage {...props} />
              </div>
            </div>
          )}
        />
        <Route path="/" exact>
          <div className="app">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
