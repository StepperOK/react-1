import{renderEntireTree}from '../render'
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'Hi, how are you?', likesCount: 13 },
      { id: 3, message: 'Hi, how are you?', likesCount: 14 },
      { id: 4, message: 'It`s my first post', likesCount: 11 }
    ]


  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Привет' },
      { id: 2, message: 'Шо ты' },
      { id: 3, message: 'как' },
      { id: 4, message: 'ты' },
      { id: 5, message: 'Собака' },
      { id: 6, message: 'Сутулая' }
    ],
    dialogs: [

      { id: 1, name: 'Дима' },
      { id: 2, name: 'Андрей' },
      { id: 3, name: 'Света' },
      { id: 4, name: 'Саша' },
      { id: 5, name: 'Виктор' },
      { id: 6, name: 'Валера' }
    ]
  }
}
export let addPost =(postMessage) => {
    let newPost = {
      id:5,
      message: postMessage,
      likesCount: 0
    };
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
}

export default state;