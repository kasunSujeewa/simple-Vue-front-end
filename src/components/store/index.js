import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        Users: [
            {
                first_name: '',
                last_name: '',
                id: '',
                email: '',
                avatar: ''
            }

        ],
        userOne: []


    },
    getters: {
        GetUsers(state) {
            return state.Users.filter(Users => Users);
        },



    },
    actions: {
        getUsers({ commit }) {
            axios.get("https://reqres.in/api/users?page=2").then((response) => {
                commit('SET_USERS', response.data.data);
            }).catch((error) => {
                this.error = error.response.data.message;

            });
        },
        deleteUser({ commit }, id) {
            commit('DELETE_USER', id);
        },
        // editUserForm({ commit }, editData) {
        //     commit("EDITFORM", editData);
        // }
        // viewOneUser({ commit }, id) {
        //     axios.get('https://reqres.in/api/users/' + id).then((response) => {
        //         router.push('/user');
        //         commit("VIEW_USER", response.data);


        //     }).catch((error) => {
        //         this.error = error.response.data.message;

        //     });
        // }


    },
    mutations: {
        SET_USERS(state, data) {
            state.Users = data;
        },
        DELETE_USER(state, id) {
            var index = state.Users.findIndex(User => User.id == id)
            state.Users.splice(index, 1)
        },
        // VIEW_USER(state, data) {
        //     state.userOne = data;
        // }
        // EDITFORM(state, data) {
        //     var index = state.Users.findIndex(User => User.id == data.id)
        //     index.first_name.assign = data.first_name;
        // }

    },

    modules: {

    }
});
