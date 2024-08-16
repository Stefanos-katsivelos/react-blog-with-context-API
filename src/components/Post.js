import React from "react";
import Comment from "./Comment";

export default function Post({ username, isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Delete</button>}
      <h1>Example Post Title</h1>
      <p>This is an example post content.</p>

      <Comment username={username} isAdmin={isAdmin}></Comment>
    </div>
  );
}
