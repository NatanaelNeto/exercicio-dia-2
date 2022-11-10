import Header from '../components/Header';
import { useContext } from 'react';
import myContext from '../context/myContext';
import '../styles/Styled.css';

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
      <main>
       <h1>Films</h1>
         <section className='container'>
         {
           manga.map((item) => (
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