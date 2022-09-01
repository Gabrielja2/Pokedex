const Header = () => {

  const types = [
    'normal',
    'poison',
    'bug',
    'fire',
    'water',
    'electric'
  ];

  return (
    <header>
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
