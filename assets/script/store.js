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
      loadTariffs: async ({commit}) =>  {
        let {data} = await axios.get('procces.php')

        console.log(data)
        commit('SET_TARIFFS', data.tarifs)
      }
    },
    mutations: {
      SET_TARIFFS(state, tariffs) {
        state.tariffs = tariffs
      }
    }
})