import { Link } from 'react-router-dom';

export default function Header() {
 
  return (
    <header>
      <ul>
        <li><Link to="/">Films</Link> </li>
        <li><Link to="/favorites">favorites</Link> </li>      
      </ul>
    </header>
  )
}