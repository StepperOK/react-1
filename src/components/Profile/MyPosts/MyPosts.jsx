import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'Hi, how are you?', likesCount: 13 },
    { id: 3, message: 'Hi, how are you?', likesCount: 14 },
    { id: 4, message: 'It`s my first post', likesCount: 11 }
  ]
  let postsElements = posts.map(p => <Post message={p.message} LikesCount={p.likesCount} />); //Берет посты из массива

  return <div className={s.postsBlock}>
    <h3> My posts</h3>
    <div>
      <textarea></textarea>
    </div>
    <div>
      <button>Add post</button>
      <div>
      </div>
      <button>Remove</button>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>

}

export default MyPosts;