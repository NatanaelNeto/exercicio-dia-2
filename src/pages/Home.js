import Header from '../components/Header';
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
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
            <figure key={item.id}>
              <img src={item.image} alt={item.title}/>
              <figcaption>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </figcaption>
              <i 
                onClick={() => handleFavorite(item)}
              >
                <FaHeart />
              </i>
            </figure>
          ))
        }
        </section>
     </main>
    </>
  )
}