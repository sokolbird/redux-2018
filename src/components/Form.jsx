import React, { PureComponent } from 'react';
import { func } from 'prop-types';

const initialValues = { title: '', url: '', tags: '' };

export default class Form extends PureComponent {
  static propTypes = {
    add: func.isRequired,
  };

  state = initialValues;

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onAdd = () => {
    this.props.add(this.state);
    this.reset();
  };

  reset = () => {
    this.setState(initialValues);
  };

  render() {
    return (
      <div>
        title:
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        url:
        <input
          type="text"
          name="url"
          value={this.state.url}
          onChange={this.onChange}
        />
        tags:
        <input
          type="text"
          name="tags"
          value={this.state.tags}
          onChange={this.onChange}
        />
        <button type="button" onClick={this.onAdd}>
          Add
        </button>
      </div>
    );
  }
}
