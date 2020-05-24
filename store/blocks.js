import axios from 'axios';

export const state = () => ({
  blockArr: [],
  currentBlock: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchBlockArr(state) {
    return axios.get('https://strapi.kruzhok.io/blocks').then(response => {
      return state.commit('setState', {
        name: 'blockArr',
        value: response.data,
      });
    });
  },
  fetchBlockWithId(state, payload) {
    return axios
      .get(`https://strapi.kruzhok.io/blocks/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentBlock',
          value: response.data,
        });
      });
  },
};

export const getters = {
  getBlockArr: state => (start, limit) => {
    return state.blockArr.slice(start, limit);
  },
  getCurrentBlock(state) {
    return state.currentBlock;
  },
};
