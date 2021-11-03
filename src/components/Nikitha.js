import { useEffect } from "react";

function Nikki(props) {
  useEffect(() => console.log("Nikki component "), []);
  return <div>Im Nikki, age {props.age1}</div>;
}
export default Nikki;
