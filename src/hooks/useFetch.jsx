// import { useEffect, useState } from 'react';

// const URL = 'https://pokeapi.co/api/v2/pokemon?limit=18&offset=0';

// // fetch API
// const useFetch = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState([]);
  
  
//   useEffect(() => {
//     setIsLoading(true);
//     const fetchData = async () => {
//       const allPokemons = await fetch(URL);
//       const json = await allPokemons.json();


//       setData(json.results); 
//       setIsLoading(false); 
//     };
//     fetchData();
//   }, []);
  
//   return { isLoading, data };
// };


// export default useFetch;