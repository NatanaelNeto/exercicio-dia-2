import { Route, Switch } from 'react-router-dom';
import myContenxt from './context/myContext';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [gibi, setGibi] = useState([]);
  const [favorites, setFavorites] = useState([]);
 
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(result => result.json())
    .then(data => setGibi(data))
    .catch(error => console.error(error))
  }, [])

  const context = {
    gibi,
    favorites,
    setFavorites
  }

  return (
    <myContenxt.Provider value={context}>
      <Switch>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/" component={Home}/>
      </Switch>
    </myContenxt.Provider>
  );
}

export default App;
