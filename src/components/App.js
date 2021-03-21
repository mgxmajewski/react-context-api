import React, { Component } from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {

  // player id counter


  render() {
    return (
      <div className="scoreboard">
        <Header />
        <PlayerList />
        <AddPlayerForm />
      </div>
    );
  }
}

export default App;
