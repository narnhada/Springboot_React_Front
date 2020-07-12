import React from "react";
import { Link } from "react-router-dom";

function Posts_save() {
  return (
    <div>
      <h1>게시글 등록</h1>
      <form>
        <div>
          <label for="title">제목</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="제목을 입력하세요"
          />
          <label for="author"> 작성자 </label>
          <input
            type="text"
            class="form-control"
            id="author"
            placeholder="작성자를 입력하세요"
          ></input>
          <label for="content"> 내용 </label>
          <textarea
            class="form-control"
            id="content"
            placeholder="내용을 입력하세요"
          ></textarea>
        </div>
      </form>
      <button>
        <Link to="/">취소</Link>
      </button>
      <button >등록</button>
    </div>
  );
}

export default Posts_save;
