import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Posts_save({ history }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const onPosts = async () => {
    await axios.post(`/api/v1/posts`, {
      title,
      author,
      content,
    });
    alert("글이 등록되었습니다.");
    history.push("/");
  };

  return (
    <div>
      <h1>게시글 등록</h1>
      <form>
        <div>
          <label>제목</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="제목을 입력하세요"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label> 작성자 </label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="작성자를 입력하세요"
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <label> 내용 </label>
          <textarea
            className="form-control"
            id="content"
            placeholder="내용을 입력하세요"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </form>
      <button>
        <Link to="/">취소</Link>
      </button>
      <button onClick={onPosts}>등록</button>
    </div>
  );
}

export default Posts_save;
