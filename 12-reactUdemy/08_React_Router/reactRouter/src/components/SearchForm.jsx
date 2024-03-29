import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './SearchForm.css';

const SearchForm = () => {
  
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?q=${query}`);
    }
    
    return (
        <>
            <form className="formulario" onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setQuery(e.target.value)}/>
                <input type="submit" value="Buscar"/>
            </form>      
        </>
    )
}

export default SearchForm
