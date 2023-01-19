export const state = () => ({
  users:[],
  limit: 6,
  token: null,
  positions: [],
})

export const mutations = {
  setUsers(state, data) {
    state.users = data;
  },

  setLimit(state, data) {
    state.limit = data;
  },

  setToken(state, data) {
    state.token = data;
  },

  setPositions(state, data) {
    state.positions = data
  }
}

export const getters = {
  getUsers: (state) => {
    return state.users;
 },

 getLimit: (state) => {
  return state.limit;
  },

  getToken: (state) => {
    return state.token;
  },

  getPositions: (state) => {
    return state.positions;
  } 
}

export const actions = {
  async users({ commit, state }) {
    return this.$axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${state.limit}`).then((data) => {
      commit('setUsers', data.data.users)
            }).catch(e => {
              console.log('throw', e);
      });
  },

  limit({commit, state}, limit) {
    commit('setLimit', limit)
  } ,

  async token({commit, state}) {
    return this.$axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token').then((data) => {
      commit('setToken', data.data.token)
            }).catch(e => {
              console.log('throw', e);
      });
  },

  async positions({commit, state}) {
    return this.$axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions ').then((data) => {
      commit('setPositions', data.data.positions)
            }).catch(e => {
              console.log('throw', e);
      });
  } 
  
}
