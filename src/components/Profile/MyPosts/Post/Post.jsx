import React from 'react';
import s from './Post.module.css';
const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg' />
      {props.message}
      <div>
        <span>Like</span>{props.LikesCount}
      </div>
    </div>
  )

}

export default Post;