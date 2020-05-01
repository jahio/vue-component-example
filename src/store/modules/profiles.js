// initial state
const state = {
  profiles: [
    { id: 1, name: "Theodore Roosevelt", location: "United States of America", occupation: "26th President of the United States", profileImage: "http://localhost:8080/roosevelt.jpg" },
    { id: 2, name: "Mahatma Gandhi", location: "India", occupation: "'Fought' for Indian Independence via Non-Violent Means", profileImage: "http://localhost:8080/gandhi.jpg" },
    { id: 3, name: "Albert Einstein", location: "United States, Germany", occupation: "Theoretical Physicist", profileImage: "http://localhost:8080/einstein.jpg" }
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
