export const store = new Vuex.Store({
    state: {
      tariffs: null
    },
    getters: {
      getTariffs: (state) => {
        if (!!state.tariffs) {
          return state.tariffs
        }
      }
    },
    actions: {
      loadTariffs({commit}) {
        axios
          .get('procces.php')
          .then(r => r.data)
          .then(tariffs => commit('SET_TARIFFS', tariffs.tarifs))
      }
    },
    mutations: {
      SET_TARIFFS(state, tariffs) {
        state.tariffs = tariffs
      }
    }
})