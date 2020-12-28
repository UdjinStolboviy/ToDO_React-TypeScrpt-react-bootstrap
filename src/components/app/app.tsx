// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ChangeEvent, Component } from "react";

import AppHeader from "../app-heder";
import SerchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddFrom from "../post-add-form";
import { TodoInterface } from "../interfece";

import "./app.scss";

export default class App extends Component<TodoInterface, {}> {
  // onUpdateSearch: ((event: ChangeEvent<HTMLInputElement>) => void)  ;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // type Props = {
  //   label: string;
  //   important: boolean;
  //   id: string;
  // };
  // | Readonly<TodoInterface>

  constructor(props: TodoInterface) {
    super(props);
    this.state = {
      data: [
        { label: "Going to learn React", important: true, like: false, id: 1 },
        { label: "That is so good", important: false, like: false, id: 2 },
        { label: "I need a break...", important: false, like: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.maxId;
  }

  maxId: number = 4;

  deleteItem(id: number | undefined) {
    this.setState(({ data }: any) => {
      const index = data.findIndex((elem: any) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  }

  addItem(body: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }: any) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleImportant(id: number | undefined) {
    this.setState(({ data }: any) => {
      const index = data.findIndex((elem: any) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  }

  onToggleLiked(id: number | undefined) {
    this.setState(({ data }: any) => {
      const index = data.findIndex((elem: any) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  }

  searchPost(items: any, term: any): [] {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item: any) => {
      return item.label.indexOf(term) > -1;
    });
  }

  onUpdateSearch(term: any) {
    this.setState({ term });
  }

  filterPost(items: any, filter: any) {
    if (filter === "like") {
      return items.filter((item: any) => item.like);
    } else {
      return items;
    }
  }

  onFilterSelect(filter: any) {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter }: any = this.state;
    const liked: number = data.filter((item: any) => item.like).length;
    const allPosts: number = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="searc-panel d-flex">
          <SerchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddFrom onAdd={this.addItem} />
      </div>
    );
  }
}
