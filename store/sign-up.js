
export const state = () => ({
    backRoute: '/'
})
  
export const mutations = {
    setBackRoute (state, payload) {
        let path = payload
        if(path === 'index') {
            path = '/'
        }
        state.backRoute = path
    }
}

export const actions = {
  async ADD_REDIRECTION_ROUTE({commit}, payload) {
    try {
        commit('setBackRoute', payload)
    } catch (error) {
        console.log('error', error)
     }
  }
}

export const getters = {
    redirectUser: state => {
        return state.backRoute || '/'
    }
}