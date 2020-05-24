import axios from 'axios';

export const state = () => ({
  statsArr: [],
  currentStats: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchStatsArr(state) {
    return axios.get('https://strapi.kruzhok.io/statistics').then(response => {
      return state.commit('setState', {
        name: 'statsArr',
        value: response.data,
      });
    });
  },
  fetchBlockWithId(state, payload) {
    return axios
      .get(`https://strapi.kruzhok.io/statistics/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentStats',
          value: response.data,
        });
      });
  },
};

export const getters = {
  getStatsArr: state => (start, limit) => {
    return state.statsArr.slice(start, limit);
  },
  getCurrentStats(state) {
    return state.currentStats;
  },
};
