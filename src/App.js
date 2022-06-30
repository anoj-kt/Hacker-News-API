import {useState, useEffect} from 'react';
import {format} from 'date-fns';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [text, setText] = useState('')
  const [largeTitle, setLargeTitle] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchArticles = async() => {
      const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
      const data = await res.json()
      setItems(data.hits)
      setLargeTitle(data.hits[0])      
    }

  fetchArticles()
  setIsLoading(false)

  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Input is emtpy!')

    } else {
      setQuery(text)
      setText('')
    }
  }

  return (
    <div className="content">

    <Header/>

    <section className="section">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="search" 
          id="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search..." />
        <button>Search</button> 
      </form> 

      {isLoading ? <div className="spinner"></div> :
      <>

      <article className="title">
      <h1>{largeTitle.title}</h1>
      <a href={largeTitle.url} target="_blank">Read the full Article here</a>
    </article>

    <p className="category">Category: <span>{query}</span></p>

    <article className="cards">
      {/* <div>
        <h2>Heading 2</h2>
        <ul>
          <li>Something</li>
          <li><a href="">Read the full Article here</a></li>
        </ul>
        <p>Date</p>
        
      </div> */}

      {items.map(({ author, created_at, title, url, objectId }) =>
      <div key={objectId}>
        <h2>{title}</h2>
        <ul>
          <li>posted by {author}</li>
          <li><a href={url} target="_blank">go to Article</a></li>
        </ul>
        <p>{format(new Date(created_at), 'dd MMMM yyyy')}</p>
      </div>      
      )}
    </article>
    </>
    }        
    </section>
    <Footer />
    </div>
    
  )
}

export default App;
