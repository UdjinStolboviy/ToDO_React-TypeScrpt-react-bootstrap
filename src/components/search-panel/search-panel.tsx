import React, { Component } from "react";
import "./search-panel.scss";
import { SerchPanelInterface } from "../interfece";

export default class SerchPanel extends Component<SerchPanelInterface, {}> {
  constructor(props: SerchPanelInterface) {
    super(props);
    this.state = {
      term: "",
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }
  onUpdateSearch(e: any) {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  }

  render(): JSX.Element {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
      />
    );
  }
}
