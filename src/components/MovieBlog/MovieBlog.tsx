import React, {Component} from 'react';
import {Movie} from "../../types";
import FormFilms from "../FormFilms/FormFilms";
import Film from "../Film/Film";

interface State {
  posts: Movie[];
}

class MovieBlog extends Component<{}, State> {
  state: State = {
    posts: [],
  }

  createPost = (newFilm: Movie) => {
    this.setState({posts: [...this.state.posts, newFilm]});
  };

  onDelete = (id: string) => {
    const newPosts = this.state.posts.filter(obj => (obj.id !== id));
    this.setState({...this.state.posts, posts: newPosts});
  };

  render() {
    return (
      <div>
        <FormFilms addFilm={this.createPost}/>
        {this.state.posts.map(post => (
          <Film
            key={post.id}
            id={post.id}
            title={post.title}
            onClick={this.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default MovieBlog;