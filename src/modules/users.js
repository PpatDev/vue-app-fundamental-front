import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user: null,
    foo: 'users-foo',
  },
  mutations: { // methods to be commit 
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
      foo(state){
        return `users-foo-getter/${state.foo}`;
      }
  },
  actions: { // methods to be dispatched
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};
