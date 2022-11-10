import Header from '../components/Header';
import { useContext } from 'react';
import myContext from '../context/myContext';

export default function Favorites() {
  const { favorites, setFavorites } = useContext(myContext)

  const handleDelete = (item) => {
    setFavorites(favorites.filter(favorite => favorite.id !== item.id))
  }
  
  return (
    <>
      <Header />
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