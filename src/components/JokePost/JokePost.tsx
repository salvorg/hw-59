import React from 'react';
import './JokePost.css';
import {Joke} from "../../types";

const JokePost: React.FC<Joke> = ({value, author}) => {
  return (
    <article className="PostCard">
      <h1>{value}</h1>
      <div className="Info">
        <div className="Author">{author}</div>
      </div>
    </article>
  );
};

export default JokePost;