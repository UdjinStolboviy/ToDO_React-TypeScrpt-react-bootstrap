/* eslint-disable array-callback-return */
import React from "react";
import "./post-list.scss";
import PostListItem from "../post-list-item";
import { TodoListIterface } from "../interfece";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

// import AppProps from "../interfece";

// interface TodoListItemProps {
//   posts: Props[];
//   onDelete: (id: any) => void;
// }
const PostList: React.FC<TodoListIterface> = ({
  posts,
  onDelete,
  onToggleImportant,
  onToggleLiked,
}) => {
  const elements = posts.map(function (item): JSX.Element | undefined {
    if (typeof item === "object" && isEmpty(item)) {
      const { id, ...itemProps } = item;

      return (
        <ListGroupItem as="li" action key={id} className="" variant="light">
          <PostListItem
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleLiked={() => onToggleLiked(id)}
          />
        </ListGroupItem>
      );
    }
  });
  function isEmpty(obj: {}) {
    for (let key in obj) {
      return true;
    }
    return false;
  }

  return (
    <ListGroup as="ul" className="app-list ">
      {elements}
    </ListGroup>
  );
};

export default PostList;
