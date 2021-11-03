import React from "react";
import axios from "axios";

class ApiCall2 extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
    };
    this.getApiData = this.getApiData.bind(this);
  }

  componentDidMount() {
    this.getApiData();
  }

  getApiData() {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      console.log("api2 222", res.data);
      this.setState({ userData: res.data });
    });
  }

  render() {
    return (
      <>
        This is API Call 2 Component
        <br />
        <br />
        User Id: {this.state.userData.userId}
        <br />
        Title: {this.state.userData.title}
        <br />
        Body: {this.state.userData.body}
        <br />
      </>
    );
  }
}

export default ApiCall2;
