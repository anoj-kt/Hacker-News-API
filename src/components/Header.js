import {useState, useEffect} from 'react';
import {format} from 'date-fns';
import logo from '../logo.png';

function App() {
 
  return (     
    
    <div className="headernav">
      <nav>
        <ul className="menu">
          <li><img src={logo}></img></li>          
          <li><a href="http://localhost:3000/">NEW</a></li>
          <li><a href="#">PAST</a></li>
          <li><a href="#">COMMENTS</a></li>         
          <li><a href="#">ASK</a></li>
          <li><a href="#">SHOW</a></li>
          <li><a href="#">JOBS</a></li>
          <li><a href="https://news.ycombinator.com/login?goto=news">LOGIN</a></li>
        </ul>
        </nav>
        </div>
        


  )
}

export default App;
