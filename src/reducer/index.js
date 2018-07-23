import * as types from '../constants/ActionType';
import Todo from '../model/Todo';

export default (
  state = {
    todos: [],
    status: Todo.ALL
  },
  action
) => {
  switch (action.type) {
    case types.ADDITEM: {
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    case types.CHECKITEM: {

      return {
        ...state,
        todos: state.todos.map(
          todo => (todo.viewId === action.todo.viewId ? action.todo : todo)
        )
      };
    }
    case types.EDITITEM: {
      return {
        ...state,
        todos: state.todos.map(
          todo =>
            todo.viewId === action.todo.viewId
              ? { ...todo, content: action.todo.content }
              : todo
        )
      };
    }
    case types.CHANGESTATUS: {

      return {
        todos: [...action.todos],
        status: action.status
      };
    }
      case types.ALL:{
        return {
          todos: [...action.todo],
           status:state.status
        }
      }
    default:
      return state;
  }
};
