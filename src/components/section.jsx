import useFetch from '../hooks/useFetch';

const Section = () => {
  const { data, isLoading }  = useFetch();
  
  
  return (
    <section>
      {
        isLoading ? <p>Waiting is Loading...</p> : (

          data.map((poke, i) => (
            <div key={i}>{poke.name}</div>
          ))

        )
      }
    </section>
  )
};

export default Section;