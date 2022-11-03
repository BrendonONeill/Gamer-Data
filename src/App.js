
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
      const response = await fetch('https://api.rawg.io/api/games');
      const api = await response.json();
      setData(api.results)
  }

  useEffect(() =>{
    fetchData()
    console.log(data)
  },[])


  return (
    <div className="main-container">
      <nav className='nav'>
      <div className='logo-nav'>
        <h1>Gamer-Data</h1>
      </div>
      <ul>
        <li><a data-bg-colour="red" href='#dog'>Sign Up</a></li>
        <li><a data-bg-colour="purple" href='#cat'>Sign In</a></li>
      </ul>
      </nav>
      {data.length > 0 &&
      <main className="main-container-content">
      <div className='sidebar'>
        <ul>
          <li>Best of all time</li>
          <li>Best of the year</li>
          <li>Top this year</li>
          <li>Genres</li>
          <li>Action</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </div>
      <div className='games-grid'>
      {data.map((d) =>
      <div className='game-card' key={d.id}>
            <div className='game-card-image'>
            <img className='test' src={d.background_image} alt="Girl in a jacket" />
            <div className='game-card-consoles'>
              <ul>
                <li><img src="playstation.svg" alt="Girl in a jacket" width="30px" height="30px" /></li>
                <li><img src="xbox.svg" alt="Girl in a jacket" width="30px" height="30px" /></li>
                <li><img src="desktop.svg" alt="Girl in a jacket" width="30px" height="30px" /></li>
                <li><img src="nin.svg" alt="Girl in a jacket" width="30px" height="30px" /></li>
              </ul>
            </div>
            </div>
            <div className='game-card-title'>
            <h2>{d.name}</h2>
            <h3>{d.metacritic}</h3>
            <h3>{d.released}</h3>
            <p>{d.parent_platforms[0].platform.name}</p>
            </div>
        </div>

      )}


      </div>
      </main>
      }
     
    </div>
  );
}

export default App;
