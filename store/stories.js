import axios from 'axios';

export const state = () => ({
  stories: [],
  currentStory: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchStories(state) {
    return axios.get(process.env.BASE_URL + '/stories').then(response => {
      return state.commit('setState', {
        name: 'stories',
        value: response.data,
      });
    });
  },
  fetchStoryWithId(state, payload) {
    return axios
      .get(`${process.env.BASE_URL}/stories/${payload.id}`)
      .then(response => {
        return state.commit('setState', {
          name: 'currentStory',
          value: response.data,
        });
      });
  },
};

export const getters = {
  getCurrentStory(state) {
    return state.currentStory;
  },
  getAllStories(state) {
    return state.stories;
  },
};
