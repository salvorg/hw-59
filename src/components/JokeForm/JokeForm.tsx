import React from 'react';
import JokePost from "../JokePost/JokePost";
import {Joke} from "../../types";

const JokeForm: React.FC<Joke> = ({id, value}) => {
  return (
    <div>
      <section className="Posts">
        <JokePost
          key={id}
          id={id}
          value={value}
          author="Chuck Norris"
        />
      </section>
    </div>
  );
};

export default JokeForm;