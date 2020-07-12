import React from "react";

function Check({ id, title, content, author }) {
  return (
    <div>
      <h3>Key: {id}</h3>
      <h3>title: {title}</h3>
      <h3>content: {content}</h3>
      <h3>author: {author}</h3>
    </div>
  );
}

export default Check;
