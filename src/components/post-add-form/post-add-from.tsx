import React, { Component } from "react";
import "./post-add-form.css";
import { TodoListIterfaceAddForm } from "../interfece";

type MyState = { text: string };
export default class PostAddFrom extends Component<
  TodoListIterfaceAddForm,
  MyState
> {
  constructor(props: TodoListIterfaceAddForm) {
    super(props);
    this.state = {
      text: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(event: any) {
    this.setState({
      text: event.target.value,
    });
  }

  onSubmit(e: any) {
    e.preventDefault();

    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <>
        <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Oчем вы думаете сейас?"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            value={this.state.text}
          />

          <button type="submit" className="btn btn-outline-secondary">
            Добавить
          </button>
        </form>
      </>
    );
  }
}
