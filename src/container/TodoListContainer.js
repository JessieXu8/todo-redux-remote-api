import {connect} from 'react-redux';
import TodoList from '../component/TodoList';
import {checkItem, editItem, changeStatus, getAll, getAllTodos} from '../action';
import todoAPI from '../api/TodoResourseAPI';

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos,
        status: state.status
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleTodo: (viewId, status) => {
            const todo = todoAPI.toggleActive(viewId);
            const todos = todoAPI.filerByStatus(status);
            dispatch(checkItem(todo));
            dispatch(changeStatus(todos, status));
        },
        onUpdateTodo: (viewId, content) => {
            const todo = todoAPI.updateItemContent(viewId, content);
            console.log(viewId);
            dispatch(editItem(todo));
        },
        onGetAll: () => {
            todoAPI.getAll(list=>dispatch(getAllTodos(list)));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
