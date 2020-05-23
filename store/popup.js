export const state = () => ({
  popupStoryShown: false,
  popupContactsShown: false,
  popupSocialShown: false,
});

export const mutations = {
  toggleStoryPopup(state) {
    return (state.popupStoryShown = !state.popupStoryShown);
  },
  toggleContactsPopup(state) {
    return (state.popupContactsShown = !state.popupContactsShown);
  },
  toggleSocialPopup(state) {
    return (state.popupSocialShown = !state.popupSocialShown);
  },
};

export const getters = {
  getPopupStoryShown(state) {
    return state.popupStoryShown;
  },
  getPopupContactsShown(state) {
    return state.popupContactsShown;
  },
  getPopupSocialShown(state) {
    return state.popupSocialShown;
  },
};
