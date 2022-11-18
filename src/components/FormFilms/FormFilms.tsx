import React, {FormEvent} from 'react';
import {Movie} from "../../types";

interface Props {
  addFilm: (newFilm: Movie) => void;
}

interface State {
  title: string;
}

class FormFilms extends React.Component <Props> {
  state: State = {
    title: ''
  }

  onChangeFormInput (title: string) {
    this.setState({title: title});
  }

  onSubmitForm (event: FormEvent) {
    event.preventDefault();
    this.props.addFilm({
      id: Math.random().toString(),
      title: this.state.title
    });
    this.setState({title: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmitForm(e)}>
          <input type='text' value={this.state.title} onChange={(e) => this.onChangeFormInput(e.target.value)} />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default FormFilms;