import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Posts_update({ match, history }) {
  const { id } = match.params;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState({
    id: "",
    title: "",
    author: "",
    content: "",
  });

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`/api/v1/posts/${id}`);
      setData(response.data);
    };
    fetch();
  }, [id]);

  const onUpdate = async () => {
    await axios.put(`/api/v1/posts/${id}`, {
      title,
      content,
    });

    alert("글이 수정되었습니다.");
    history.push("/");
  };

  const onDelete = async () => {
    await axios.delete(`/api/v1/posts/${id}`);

    history.block("글이 삭제되었습니다.");
    history.push("/");
  };

  return (
    <div>
      <h1>게시글 수정</h1>
      <form>
        <div>
          <label> 글 번호 </label>
          <input
            type="text"
            className="form-control"
            id="id"
            value={data.id}
            readOnly
          ></input>
          <label>제목</label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder={data.title}
          />
          <label> 작성자 </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={data.author}
            readOnly
          ></input>
          <label> 내용 </label>
          <textarea
            className="form-control"
            id="content"
            placeholder={data.content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </form>
      <button>
        <Link to="/">취소</Link>
      </button>
      <button onClick={onUpdate}>수정완료</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
}

export default Posts_update;
