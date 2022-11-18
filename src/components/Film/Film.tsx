import React from 'react';

interface Props {
  id: string;
  title: string;
  onClick: (id: string) => void;
}

interface State {
  title: string;
}

class Film extends React.Component<Props> {
  state: State = {
    title: this.props.title,
  }

  shouldComponentUpdate(nextState: Readonly<State>): boolean {
    return this.state.title !== nextState.title;
  }

  onChangeInput (title: string) {
    this.setState({title: title});
  }

  render() {
    return (
      <div id={this.props.id}>
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => this.onChangeInput(e.target.value)}
        />
        <button
          type="button"
          onClick={() => this.props.onClick(this.props.id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Film;