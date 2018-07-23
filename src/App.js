import React, { Component } from 'react';
import './App.css';
import AddItemContainer from './container/AddItemContainer';
import TodoListContainer from './container/TodoListContainer';
import FilterListContainer from './container/FilterListContainer';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <AddItemContainer />
        <TodoListContainer />
        <FilterListContainer />
      </div>
    );
  }
}

export default App;
