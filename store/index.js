export const state = () => ({
      isStretched: false
  })
  
export const mutations = {
  stretchSideMenu (state, payload) {
    state.isStretched = !state.isStretched
  }
}

export const actions = {
    STRETCH_SIDE_MENU({commit}) {
      commit('stretchSideMenu')
    }
}

export const getters = {
  isSideMenuStretched: state => {
    return state.isStretched
  },
}