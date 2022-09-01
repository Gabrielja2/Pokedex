import { useState } from "react";
import { useEffect } from "react";

const Header = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const types = [
    'normal',
    'poison',
    'bug',
    'fire',
    'water',
    'electric'
  ];

  return (
    <header style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Minha Pokédex</h1>
      <input placeholder="Digite um pokemon" type="text"></input>
      <div className="radios-filters">
      {
        types.map((type, i) => (
          <label key={i} htmlFor={`filter-${type}`}>
            <input id={`filter-${type}`} type="radio" value={type} name="filters" />
            {type}
          </label>
        ))
      }
      </div>      
    </header>
  )
};

export default Header;
