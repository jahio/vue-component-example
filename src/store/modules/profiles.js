// initial state
const state = {
  profiles: [
    { id: 2, name: "Obi-Wan Kenobi", location: "Tatooine", occupation: "Jedi Knight, Mentor to Darth Vader", profileImage: "http://localhost:8080/obi-wan.jpg" },
    { id: 3, name: "Yoda", location: "Dagobah", occupation: "Jedi Master, Mentor to Luke Skywalker", profileImage: "http://localhost:8080/yoda.jpg" },
    { id: 1, name: "J. Austin Hughey", location: "Texas, USA (Earth)", occupation: "Dark Lord of the Sith", profileImage: "http://localhost:8080/jah.jpg" }
  ]
}

// getters
const getters = {
  allProfiles(state) {
    return state.profiles
  },
  getProfile: (state) => (id) => {
    console.log("Running profiles.find for id " + id)
    return state.profiles.find(profile => profile.id === id)
  }
}

// actions
const actions = {
  removeProfile ({ commit, state }, id) {
    const newProfiles = state.profiles.filter(profile => profile.id !== id)
    commit('setProfiles', newProfiles)
  },

  addProfile({ commit, state }, profile) {
    // We assume here that the profile object is complete and valid; error checking/form validation
    // is outside the scope of responsibility for state management.
    const newProfiles = state.profiles.push(profile)
    commit('setProfiles', newProfiles)
  }
}

// mutations
const mutations = {
  setProfiles (state, profiles) {
    state.profiles = profiles
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
