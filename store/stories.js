export const state = () => ({
  storyArr: [
    {
      id: '1',
      name: 'Владимир Тен',
      content:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      url:
        'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg',
    },
    {
      id: '2',
      name: 'Владимир Познер',
      content: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      url:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
    },
    {
      id: '3',
      name: 'Александр Тарханов',
      content: 'Я не могу победить свою пунктуальность в отличии от рака.',
      url:
        'https://static.tildacdn.com/tild6466-3937-4564-a561-383966623266/noroot.png',
    },
    {
      id: '4',
      name: 'Владимир Тен',
      content:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      url:
        'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg',
    },
    {
      id: '5',
      name: 'Владимир Тен',
      content:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      url:
        'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg',
    },
    {
      id: '6',
      name: 'Владимир Познер',
      content: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
      url:
        'https://static.tildacdn.com/tild6232-6166-4435-b066-393234336532/galleryFullImage-1-1.jpg',
    },
    {
      id: '7',
      name: 'Александр Тарханов',
      content: 'Я не могу победить свою пунктуальность в отличии от рака.',
      url:
        'https://static.tildacdn.com/tild6466-3937-4564-a561-383966623266/noroot.png',
    },
    {
      id: '8',
      name: 'Владимир Тен',
      content:
        'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
      url:
        'https://static.tildacdn.com/tild3030-6237-4066-b931-613262646132/IMG_20191024_184116.jpg',
    },
  ],
});

export const mutations = {};

export const getters = {
  getStoryArr(state) {
    return state.storyArr;
  },
};
