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
    axios
      .post(process.env.BASE_URL + '/forms/contacts', {
        full_name: state.data.fullName, //Как вас зовут?
        email: state.data.email, //Электронная почта
        phone: state.data.phone, //Телефон
        preferred: state.data.preferred, //Напишите, если есть предпочтительный способ связи и удобное время
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  },
};
