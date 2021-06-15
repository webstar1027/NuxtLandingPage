import axios from 'axios'

export const state = () => ({
    location: {
        city: '',
        contry: '',
        currency: '',
        timezone: 'Europe'
    },
})
  
export const mutations = {
    setLocation (state, payload) {
        state.location = payload
    }
}

export const actions = {
  async ADD_LOCATION({commit, state}) {
    try {
        if(process.browser) {
            const storageLocation = window.localStorage.getItem('location')
            if(storageLocation) {
                commit('setLocation', JSON.parse(storageLocation))
                return
            }
            await axios.get('/visitors')
                .then(res => {
                    commit('setLocation', res.data)
                    window.localStorage.setItem('location', JSON.stringify(res.data));
                })
        }
    } catch (error) {
        console.log('error', error)
     }
    
  }
}

export const getters = {
    getUserCity: state => {
        return state.location.city
    },
    getUserContry: state => {
        return state.location.contry
    },
    getUserCurency: state => {
        return state.location.currency
    },
    getUserTimezone: state => {
        return state.location.timezone
    }
}