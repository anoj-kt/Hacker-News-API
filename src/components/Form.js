import React, { useState } from "react";
//import Todolist from "./Todolist";

const Form = ({ inputsearch }) => {
  //   const [inputform, setInputform] = useState("");
  //   const [list, setList] = useState([]);
  //const keypair = createContext();

  //handle text change
  //   const handleChange = (e) => {
  //     setInputform(e.target.value);
  //   };
  //   //object list: key, value access: loadId[0].Id,loadId[0].todos
  //   const loadId = [
  //     {
  //       id: list.length,
  //       todos: inputform,
  //     },
  //   ];

  //   //handle Click Event:update liststate and save it as key pair values
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setList([...list, loadId]);
  //   };
  return (
    <div id="center-input">
      <form id="search-container">
        <input
          type="text"
          placeholder="Search..."
          //placeholder="search for..."
          //value={inputsearch}
          //onChange={handleChange
        />
        <button>
          <i className="fa fa-plus">Search</i>
        </button>
      </form>
      <div id="resultbox">
        <h2>Heading</h2>
        <ul>
          <li>Author</li>
          <li>ref here</li>
        </ul>
        <p>Date</p>
      </div>
    </div>
  );
};
export default Form;
