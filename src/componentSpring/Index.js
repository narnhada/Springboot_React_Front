import React from "react";
import { Link } from "react-router-dom";
// import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Index extends React.Component {
  render() {
    return (
      //   <div>
      //     <button>
      //       <Link to="/posts/save">글 등록</Link>
      //     </button>
      //     {/* <BootstrapTable data={ products }> */}
      //     <BootstrapTable>
      //       <TableHeaderColumn dataField="id" isKey>
      //         게시글번호
      //       </TableHeaderColumn>
      //       <TableHeaderColumn dataField="title">제목</TableHeaderColumn>
      //       <TableHeaderColumn dataField="author">작성자</TableHeaderColumn>
      //       <TableHeaderColumn dataField="modifiedDate">
      //         최종수정일
      //       </TableHeaderColumn>
      //     </BootstrapTable>
      //   </div>
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
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Index;

// https://getbootstrap.com/docs/4.4/content/tables/
