import useFetch from '../hooks/useFetch';

const Section = () => {
  const { data, isLoading }  = useFetch();
  
  
  return (
    <section style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {
        isLoading ? <p>Waiting is Loading...</p> : (

          data.map((poke, i) => (
            <div
            style={{border: '1px black solid', width: '200px', height: '200px'}}
            key={i}>{poke.name}</div>
          ))

        )
      }
    </section>
  )
};

export default Section;