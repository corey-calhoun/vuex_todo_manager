// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }) {  // calls the ToDo List
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        commit('setTodos', response.data); // commit('mutation to call', what you want passed in)
    },
    async addTodo({ commit }, title) { // add new item to ToDo List
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos', { title, completed: false}
        );
        commit('newTodo', response.data); // commit('mutation to call', what you want passed in)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },
    async filterTodos({ commit }, e) {
        // Get selected number
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        );

        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
        );
        commit('setTodos', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos), // take in response and add to state
    newTodo: (state, todo) => state.todos.unshift(todo), // adds new todo to top of list
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id) 
};

export default {
    state,
    getters,
    actions,
    mutations
};