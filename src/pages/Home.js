import Header from '../components/Header';
import { useContext } from 'react';
import myContext from '../context/myContext';

export default function Home() {
  const { manga, favorites, setFavorites } = useContext(myContext)

  const handleFavorite = (item) => {
    const exist = favorites.find(favorite => favorite.id === item.id)
    if (exist) return
    setFavorites([...favorites, item])
  }

  return (
    <>
      <Header />
      {
        manga.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title}/>
            <p>{item.description}</p>
            <button 
              onClick={() => handleFavorite(item)}
            >
              ❤️
            </button>
          </div>
        ))
      }
    </>
  )
}