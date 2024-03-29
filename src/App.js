import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out trash",
        completed: false
      },
      {
        id: 2,
        title: "feed kittens",
        completed: false
      },
      {
        id: 3,
        title: "dance",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}  />
      </div>
    );
  }
}

export default App;
