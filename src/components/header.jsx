import { useContext, useEffect, useState } from 'react';
import Context from '../context/context';
import { fetchTypes } from '../services/fetch';



function Header() {
  
  const { filterName, setFilterName } = useContext(Context)
  const [types, setTypesList] = useState([])

  useEffect(() => {
    const callFetchTypes = async () => {
      const typesList = await fetchTypes();
      const typesJson = await typesList.json();
      const typesResults = typesJson.results;
      const typesFiltered = typesResults.map(type => type.name);
      setTypesList(typesFiltered);
   
    };
    callFetchTypes();
  }, []);
  


  return (
    <header className="flex flex-col items-center">
      <h1 className="text-5xl">Minha Pokédex</h1>
      <input
      className=" w-full max-w-xs border-2 border-cyan-500/95 my-2"
      placeholder="Digite um pokemon"
      type="text"
      onChange={ ({target}) => setFilterName( target.value) }
      value={ filterName }>
      </input>
      <div className="flex flex-wrap buttons-filters justify-center gap-4">
      {
        types.map((type, i) => (
          
            <button key={i} className="border-2 border-cyan-500/95 rounded-lg mx-1 w-20"
            id={`filter-${type}`} type="button">
              {type}
            </button>
           
          
        ))
      }
      </div>      
    </header>
  )
};

export default Header;
