import Header from '../components/Header';
import { useContext } from 'react';
import myContenxt from '../context/myContext';
import '../styles/Home.css';

export default function Home() {
  const { gibi, favorites, setFavorites } = useContext(myContenxt)

  const handleFavorite = (item) => {
    const exist = favorites.find(favorite => favorite.id === item.id)
    if (exist) return
    setFavorites([...favorites, item])
  }

  return (
    <>
      <Header />
     <main>
      <h1>Films</h1>
        <section className='container'>
        {
          gibi.map((item) => (
            <section className='card' key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title}/>
              <p>{item.description}</p>
              <button 
                onClick={() => handleFavorite(item)}
              >
                ❤️
              </button>
            </section>
          ))
        }
        </section>
     </main>
    </>
  )
}