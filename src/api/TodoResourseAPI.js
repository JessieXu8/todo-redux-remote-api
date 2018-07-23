import Todo from '../model/Todo';
import {addItem, checkItem, editItem, changeStatus, getAllTodos} from '../action'

const initUrl = "http://localhost:8080/api"
const axios = require('axios')

const todoAPI = {
    todos: [],

    getAll(dispatch) {
        axios
            .get(`${initUrl}/todos`)
            .then((response) => {
                console.log("-------\n" + JSON.stringify((response.data._embedded.todos)))
                dispatch(response.data._embedded.todos)
            })
            .catch(function (error) {
                console.log("======" + error);
            });
    },

    //
    // add(item) {
    //   this.todos.push(item);
    //   console.log(this.todos);
    // },

    add(todo, dispatch) {
        axios
            .post(`${initUrl}/todos`, {
                id: todo.viewId,
                content: todo.content,
                status: todo.ACTIVE
            })

            .then(function (response) {
                console.log(response.data);
                dispatch(addItem(
                    new Todo(
                        response.data.content,
                        response.data.status,
                        response.data.id
                    )
                ))
            })
            .catch(function (error) {
                console.log(error);
            })
    },


    filerByStatus(status) {
        if (status === Todo.ALL) {
            return this.todos;
        }
        return this.todos.filter(item => item.status === status);
    },
    toggleActive(viewId) {
        let todo = this.todos.find(item => item.viewId === viewId);
        if (todo !== undefined) {
            todo.toggleActive();
        }
        return todo;
    },
    updateItemContent(viewId, content) {
        let todo = this.todos.find(item => item.viewId === viewId);
        if (todo !== undefined) {
            todo.content = content;
        }
        return todo;
    }
};
export default todoAPI;
