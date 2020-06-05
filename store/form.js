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
    axios
      .post(process.env.BASE_URL + '/forms/stories', {
        full_name: state.data.name, // Как вас зовут?
        story: state.data.cancerStory, // Было ли у вас онкологическое заболевание? Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.
        pleas_act: state.data.pleasureActivities, // Какие занятия приносят Вам наибольшее удовольствие? Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.
        common_act: state.data.commonActivities, //На что, кроме семьи, быта и работы, Вы тратите свое время?
        hobbies: state.data.hobbies, // Какие сильные увлечения у Вас есть? Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.
        habits: state.data.habits, //Ваши близкие, друзья или коллеги замечали за вами какие-нибудь необычные привычки или особенности?
        reg_act: state.data.regularActivities, // Существуют ли какие-то ритуалы/действия, которые Вы совершаете регулярно? Кроме необходимых, таких, как чистка зубов.
        alone_act: state.data.aloneActivities, //Если вам выдался свободный день/вечер в одиночестве, чем вы займетесь?
        calm_act: state.data.calmDownActivities, //Что Вас успокаивает/умиротворяет лучше всего?
        events: state.data.events, //Какие события/ситуации или действия других людей обычно выводят Вас из себя?
        weekends: state.data.weekends, //Как вы обычно проводите выходные?,
        phone: state.data.phone, //телефон для связи.
        email: state.data.email, // Почта. После обработки анкеты координатор проекта свяжется с Вами для размещения Вашей истории на сайте.
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
