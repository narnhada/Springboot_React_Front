import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Index2() {
  const [data, setData] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const response = await Axios.get(`/api/v1/posts/9`);
      setData(response.data);
      // console.log(response.data);
      setDate(response.headers.date);
      // console.log(response);
    };
    fetch();
  }, []);

  return (
    <div>
      <button>
        <Link to="/posts/save">글 등록</Link>
      </button>
      <table className="table table-horizontal table-bordered">
        <thead className="thead-strong">
          <tr>
            <th>게시글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>최종수정일</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr>
            <td>{data.id}</td>
            <td>
              <Link to={`/posts/update/${data.id}`}>{data.title}</Link>
            </td>
            <td>{data.author}</td>
            <td>{date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Index2;
