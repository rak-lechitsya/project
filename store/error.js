export const state = () => ({
  error: false,
});

export const mutations = {
  errorTrue(state) {
    return (state.error = true);
  },
  errorFalse(state) {
    return (state.error = false);
  },
};

export const getters = {
  getError(state) {
    return state.error;
  },
};
