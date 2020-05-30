import formData from '../formData';

export const state = () => ({
  questions: formData.questions || null,
});

export const getters = {
  getQuestions(state) {
    return state.questions;
  },
};
