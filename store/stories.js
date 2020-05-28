import axios from 'axios';

export const state = () => ({
  stories: [],
  currentStory: {},
});

export const mutations = {
  addList(state, stories) {
    state.stories = stories;
  },
};

export const actions = {
  async GET_LIST({ commit }) {
    const DATA = await this.$axios.$get('stories');
    commit('addList', DATA);
  },
};

export const getters = {
  getRelevantStories: state => (start, limit) => {
    let copyArr = state.stories.slice(0);
    let relevantStories = [];
    return (relevantStories = copyArr.splice(start, limit));
  },
  getCurrentStory(state) {
    return state.currentStory;
  },
  getAllStories(state) {
    return state.stories;
  },
};
