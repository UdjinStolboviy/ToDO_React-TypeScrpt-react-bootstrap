/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from "react";
import "./post-list-item.css";
import { TodoListIterfaceItem } from "../interfece";
import { Button } from "react-bootstrap";

// interface AppProps {
//   label: string;
// }

const PostListItem: React.FC<TodoListIterfaceItem> = ({
  label,
  onDelete,
  onToggleImportant,
  onToggleLiked,
  important,
  like,
}: TodoListIterfaceItem): JSX.Element => {
  let classNames: string = "app-list-item d-flex justify-content-between ";
  if (important) {
    classNames += " important";
  }

  if (like) {
    classNames += " like";
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onToggleLiked}>
        {label}
      </span>
      <div
        className="d-flex justify-content-center align-items-center"
        aria-label="Basic example"
      >
        <Button
          className="btn-star btn-sm"
          variant="light"
          onClick={onToggleImportant}
        >
          <i className="fa fa-star"></i>
        </Button>
        <Button className="btn-trash btn-sm" variant="light" onClick={onDelete}>
          <i className="fa fa-trash-o"></i>
        </Button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
};

export default PostListItem;
