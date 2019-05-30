import episodeService from '@/services/episode.service'

export const state = () => ({
    episodes: []
})

export const getters = {
    categories (state) {
        state.episodes
    } 
}

export const mutations = {
    setEpisodes(state, episodes) {
        state.episodes = episodes
    }
}

export const actions = {
    async getEpisodes({ commit }) {
        const data = await episodeService.index()
        commit('setEpisodes', data)
    }
}