import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`/api/v1/posts`);

      setData(response.data);
    };
    fetch();
  }, []);

  return (
    <div>
      <button style={{ margin: 10 }}>
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
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Link to={`/posts/update/${user.id}`}>{user.title}</Link>
              </td>
              <td>{user.author}</td>
              <td>{user.modifiedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
