import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* 
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
      */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      {/* .active é style padrão do navlink, para mudar isso, basta criar uma condicional 
        <NavLink to="/" className={({isActive}) => (isActive ? "on" : "off")}>Home</NavLink>  
        <NavLink to="/about" className={({isActive}) => (isActive ? "on" : "off")}>Sobre</NavLink>
      */}

    </nav>
  )
}

export default Navbar;