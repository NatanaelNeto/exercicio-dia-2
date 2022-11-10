import { Route, Switch } from 'react-router-dom';
import myContext from './context/myContext';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [manga, setManga] = useState([]);
  const [favorites, setFavorites] = useState([]);
 
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(result => result.json())
    .then(data => setManga(data))
    .catch(error => console.error(error))
  }, [])

  const context = {
    manga,
    favorites,
    setFavorites
  }

  return (
    <myContext.Provider value={context}>
      <Switch>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/" component={Home}/>
      </Switch>
    </myContext.Provider>
  );
}

export default App;
