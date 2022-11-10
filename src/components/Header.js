import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import logo from '../images/logo_ghibli.png';
import '../styles/Header.css'

export default function Header() {
  const { location: { pathname } } = useHistory();
  
  return (
    <header>
      <img src={ logo } alt="logo-ghibli" />
      <nav>
        { pathname === '/favorites' 
          ? <Link to="/">Films</Link> 
          : <Link to="/favorites">favorites</Link> 
        }
      </nav>
    </header>
  )
}