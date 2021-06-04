import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = [
           {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It`s my first post', likesCount: 11}
        ]

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
      <Post message={postData[0].message} LikesCount={postData[0].likesCount} />
      <Post message={postData[1].message} LikesCount={postData[1].likesCount} />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>

}

export default MyPosts;