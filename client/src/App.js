import React, { Component } from 'react';
import TodoForm from './components/SongForm';
import TodoList from './components/SongList';

class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    //TODO make a call to our rails server to get Items
  }

  addItem = (name) => {
    //TODO make api call to rails server to add item
    //TODO update state
  }

  updateTodo = (id) => {
    //TODO make api call to update todo
    //TODO update state
  }

  deleteTodo = (id) => {
    //TODO make api call to delete todo
    //TODO remove it from state
  }

  render() {
    return (
      <div className="container">
        <SongForm addItem={this.addItem} />
        <SongList
          songs={this.state.songs}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
        />
      </div>
    );
  }
}

export default App;