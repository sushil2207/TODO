import React from "react";
import CheckboxList from "../layouts/CheckBox";

const Items = (props) => {
  //const items = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  return <div><CheckboxList items={props.items}/></div>;
};

export default Items;
