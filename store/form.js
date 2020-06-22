import axios from 'axios';
import formData from './form-data';

export const state = () => ({
  questions: formData.questions || null,
  data: {},
  finish: false,
});

export const mutations = {
  saveData(state, result) {
    state.data = result;
  },
  finishTrue(state) {
    return (state.finish = true);
  },
  finishFalse(state) {
    return (state.finish = false);
  },
};

export const actions = {
  async sentData({ commit, state }, data) {
    await commit('saveData', data);
    const {
      name: full_name,
      cancerStory: story,
      pleasureActivities: pleas_act,
      commonActivities: common_act,
      hobbies,
      habits,
      regularActivities: reg_act,
      aloneActivities: alone_act,
      calmDownActivities: calm_act,
      events,
      weekends,
      phone,
      email,
    } = state.data;
    axios
      .post(`${process.env.BASE_URL}/forms/stories`, {
        full_name,
        story,
        pleas_act,
        common_act,
        hobbies,
        habits,
        reg_act,
        alone_act,
        calm_act,
        events,
        weekends,
        phone,
        email,
      })
      .then(response => {
        console.log(response);
        commit('error/errorFalse', null, { root: true });
        commit('finishTrue');
      })
      .catch(error => {
        console.log(error);
        commit('error/errorTrue', null, { root: true });
      });
  },
};

export const getters = {
  getQuestions(state) {
    return state.questions;
  },
  getFinish(state) {
    return state.finish;
  },
};
