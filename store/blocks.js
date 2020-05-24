import axios from 'axios';

export const state = () => ({
  blockArr: [],
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
};

export const getters = {
  getBlockArr(state) {
    return state.blockArr;
  },
};
