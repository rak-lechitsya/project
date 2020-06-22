import axios from 'axios';

export const state = () => ({
  data: {},
});

export const mutations = {
  saveData(state, answer) {
    state.data = answer;
  },
};

export const actions = {
  async sentData({ commit, state }, data) {
    await commit('saveData', data);
    const { fullName: full_name, email, phone, preferred } = state.data;
    axios
      .post(`${process.env.BASE_URL}/forms/contacts`, {
        full_name,
        email,
        phone,
        preferred,
      })
      .then(response => {
        commit('error/errorFalse', null, { root: true });
        commit('popup/toggleContactsPopup', null, { root: true });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        commit('error/errorTrue', null, { root: true });
      });
  },
};
