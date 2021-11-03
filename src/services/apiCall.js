const getApiData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const responseData = axios.get(url).then((data) => {
    console.log("data 111", data.data);
    this.setState({ apiData: data.data });
  });
};

export default { getApiData };
