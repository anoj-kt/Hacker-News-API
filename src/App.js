import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import axios from "axios";
//import hits from "./hackernews.json";
const API_URL = "http://hn.algolia.com/api/v1/search?query=";

function App() {
  //WTF
  //const [data, setData] = useState(null);
  //getting data
  // useEffect(() => {
  //   fetch(API_URL+selector)
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch(() => console.log("Failed to fetch data"));
  // }, []);
  let stringselection = "story";

  return (
    <div>
      <header></header>

      <main>
        <article>
          <h1> Search Enginge</h1>

          <Form />
        </article>
      </main>
    </div>
  );
}

export default App;
