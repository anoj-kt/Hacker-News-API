import {useState, useEffect} from 'react';
import {format} from 'date-fns';


function App() {
 
  return (     
    
    <div className="footer-container">
      <div className="footer">
        <img id="logofooter" src="./resources/image/headerfooter/saffron2.png" alt=""/>
        <div className="footer-heading footer-left">
          
          <h2>About HN</h2>
          <a href="https://news.ycombinator.com/newsguidelines.html" target="_blank"> Guidelines </a>          
          <a href="https://www.ycombinator.com/legal/" target="_blank"> Legal </a>
          <a href="#"> Terms of Service </a>
        </div>
        <div className="footer-heading footer-mid">
          <h2>Carreer</h2>
          <a href="https://www.ycombinator.com/apply/" target="_blank"> Jobs </a>
          <a href="#"> Support </a>
          <a href="#"> Contact </a>
          
        </div>
        <div className="footer-heading footer-right">
          <h2>API</h2>
          <a href="https://github.com/HackerNews/API" target="_blank"> HackerNews API </a> 
          <a href="https://news.ycombinator.com/newsfaq.html" target="_blank"> FAQ </a> 
          <a href="#"> Cookies Policy </a>         
        </div>       
      </div>
    </div>
  )
}

export default App;