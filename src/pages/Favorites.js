import Header from '../components/Header';
import { useContext } from 'react';
import { FaHeartBroken } from 'react-icons/fa';
import myContext from '../context/myContext';

export default function Favorites() {
  const { favorites, setFavorites } = useContext(myContext)

  const handleDelete = (item) => {
    setFavorites(favorites.filter(favorite => favorite.id !== item.id))
  }
  
  return (
    <>
      <Header />
      <main>
        <h1>Favorites</h1>
        <section className='container'>
        {
          favorites.length > 0 && favorites.map(item => (
            <figure key={item.id}>
              <img src={item.image} alt={item.title}/>
              <figcaption>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </figcaption>
              <i 
                onClick={() => handleDelete(item)}
              >
                <FaHeartBroken />
              </i>
            </figure>
          ))
        }
        </section>
      </main>
    </>
  )
}