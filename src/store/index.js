import Vue from 'vue'
import Vuex from 'vuex'
import profiles from './modules/profiles'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    profiles
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})