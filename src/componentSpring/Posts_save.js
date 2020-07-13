import React, { useState } from "react";
import { Link } from "react-router-dom";

function Posts_save() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const _Save = () => {
    const post = {
      title: title,
      author: author,
      content: content      
    };

    fetch("/api/v1/posts/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
      });
      alert("글이 등록되었습니다.");
      window.location.href = '/';


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
      <button onClick={_Save}>등록</button>
    </div>
  );
}

export default Posts_save;
