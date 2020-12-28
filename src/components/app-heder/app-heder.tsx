import React from "react";
import "./app-header.scss";

const AppHeader = ({ liked, allPosts }: any) => {
  return (
    <div className="app-header d-flex">
      <h1>Stolboviy Udjin</h1>
      <h2>
        {allPosts} записей, из них понравилось {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
