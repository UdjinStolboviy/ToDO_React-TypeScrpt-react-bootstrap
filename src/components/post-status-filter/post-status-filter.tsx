import React, { Component } from "react";
import "./post-status-filter.scss";

import { PostStatusFilterInterface } from "../interfece";
import { Button } from "react-bootstrap";

export default class PostStatusFilter extends Component<PostStatusFilterInterface> {
  buttons: { name: string; label: string }[];
  constructor(props: PostStatusFilterInterface) {
    super(props);
    this.buttons = [
      { name: "all", label: "Все" },
      { name: "like", label: "Поравилось" },
    ];
  }

  render(): JSX.Element {
    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props;
      const active = filter === name;
      const clazz = active ? "secondary" : "outline-secondary";
      return (
        <Button key={name} variant={clazz} onClick={() => onFilterSelect(name)}>
          {label}
        </Button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
