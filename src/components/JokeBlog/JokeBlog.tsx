import React, {useEffect, useState} from 'react';
import {Joke} from "../../types";
import JokeForm from "../JokeForm/JokeForm";

const url = 'https://api.chucknorris.io/jokes/random';

const JokeBlog = () => {
  const [post, setPost] = useState<Joke>({id: '', value: '', author: ''});

  const [postFormShown, setPostFormShown] = useState(false);
  const [state, setState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      if (response.ok) {
        const post: Joke = await response.json();
        const newPost = {
          ...post,
          id: post.id,
          value: post.value,
        };
        setPost(newPost);
      }
    };

    fetchData().catch(console.error);
  }, [postFormShown, state]);

  const togglePostForm = () => setPostFormShown(prev => !prev);

  return (
    <div style={{margin: 40}}>
      <button onClick={togglePostForm}>
        New joke
      </button>
      <JokeForm id={post.id} value={post.value} author={post.author}/>
    </div>
  );
};

export default JokeBlog;