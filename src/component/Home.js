import React from "react";
import Client from "../api/Api";
import Check from "./Check";

import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    data: [],
  };


  /* 불러오는 양이 적어 비동기 처리는 확인은 slow 3g로 확인  */
  getReq = async () => {
    const { data } = await Client.get(`api/v1/posts/${1}`);
    console.log(data);
    this.setState({ data, isLoading:false });
  };

  componentDidMount() {
    this.getReq();
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <div>
        {isLoading ? (
          "Loading..."
        ) : (
          <Check
            id={data.id}
            title={data.title}
            content={data.content}
            author={data.author}
          />
        )}
      </div>
    );
  }
}

export default Home;