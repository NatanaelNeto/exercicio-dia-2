import Header from '../components/Header';
import { useContext } from 'react';
import myContenxt from '../context/myContext';

export default function Favorites() {
  const { favorites, setFavorites } = useContext(myContenxt)

  const handleDelete = (item) => {
    setFavorites(favorites.filter(favorite => favorite.id !== item.id))
  }
  
  return (
    <>
      <Header />
      <h1>Pagina de Favoritos</h1>
      {
        favorites.length > 0 && favorites.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title}/>
            <p>{item.description}</p>
            <button 
              onClick={() => handleDelete(item)}
            >
              💔
            </button>
          </div>
        ))
      }
    </>
  )
}