import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      this.props.onGetAll();
  }

  render() {
    return (
      <div>
        <ol>
          {(() => {
            return this.props.todos.map(item => (
              <TodoItem
                item={item}
                key={item.viewId}
                toggleActiveHandler={viewId =>
                  this.props.onToggleTodo(viewId, this.props.status)
                }
                updateItemContent={(viewId, content) =>
                  this.props.onUpdateTodo(viewId, content)
                }
              />
            ));
          })()}
        </ol>
      </div>
    );
  }
}
