import axios from 'axios';

export const state = () => ({
  storyArr: [],
  currentStory: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchStoryArr(state) {
    return axios.get('https://strapi.kruzhok.io/stories').then(response => {
      return state.commit('setState', {
        name: 'storyArr',
        value: response.data,
      });
    });
  },
  fetchStoryWithId(state, payload) {
    return axios
      .get(`https://strapi.kruzhok.io/stories/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentStory',
          value: response.data,
        });
      });
  },
};

export const getters = {
  getStoryArr(state) {
    return state.storyArr;
  },
  getCurrentStory(state) {
    return state.currentStory;
  },
};
