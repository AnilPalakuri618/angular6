import axios from "axios";
import React from "react";

class ApiCall extends React.Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
    };
    this.getApiData = this.getApiData.bind(this);
  }

  componentDidMount() {
    this.getApiData();
  }

  getApiData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const responseData = axios.get(url).then((data) => {
      console.log("data 111", data.data);
      this.setState({ apiData: data.data });
    });
  }

  render() {
    return (
      <>
        This is API Component
        {/* <li>Anil</li> */}
        {this.state.apiData.map((item) => (
          <li>{item.title}</li>
        ))}
      </>
    );
  }
}

export default ApiCall;
