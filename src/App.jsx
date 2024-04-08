import useFetch from './hooks/useFecthCharacters';
import './App.css';
import { useState } from 'react';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  

  const {data: pokemonData, loading: pokemonLoading} = useFetch(urlPokemon);
  const {data: rickData, loading: rickLoading} = useFetch(urlRick);
  
  return (
    <div>
    <h2>Personaje Pokemon</h2>
    {pokemonLoading ? ( 
    <p>Cargando...</p>
    ) : (
    <>
    <p>{pokemonData.name}</p>
    <img src={pokemonData.sprites.front_default} alt={pokemonData.name}  />
    </>
    )}
    <h2>Personaje Rick and Morty</h2>
    {rickLoading ? (
      <p>Cargando...</p>
    ) : (
    <>
    <p>{rickData.name}</p>
    <img src={rickData.image} alt={rickData.name} />
    </> 
    )} 
    </div>
  )
}


  /*const [pokemonName, setPokemonName] = useState('');
  const [rickName, setRickName] = useState('');
  const [pokemonUrl, setPokemonUrl] = useState('');
  const [rickUrl, setRickUrl] = useState('');

  const handlePokemonSubmit = (e) => {
    e.preventDefault();
    setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  };

  const handleRickSubmit = (e) => {
    e.preventDefault();
    setRickUrl(`https://rickandmortyapi.com/api/character/?name=${rickName}`);
  };

  const { data: pokemonData, loading: pokemonLoading } = useFetch(pokemonUrl);
  const { data: rickData, loading: rickLoading } = useFetch(rickUrl);

  return (
    <>
      <form onSubmit={handlePokemonSubmit}>
        <input
          type="text"
          placeholder="Buscar Pokemon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <h2>Personaje Pokemon</h2>
      {pokemonLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {pokemonData && pokemonData.name && <p>{pokemonData.name}</p>}
          {pokemonData && pokemonData.sprites && (
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          )}
        </>
      )}

      <form onSubmit={handleRickSubmit}>
        <input
          type="text"
          placeholder="Buscar personaje de Rick y Morty"
          value={rickName}
          onChange={(e) => setRickName(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <h2>Personaje Rick and Morty</h2>
      {rickLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {rickData && rickData.results && rickData.results.length > 0 ? (
            rickData.results.map((character) => (
              <div key={character.id}>
                <p>{character.name}</p>
                <img src={character.image} alt={character.name} />
              </div>
            ))
          ) : (
            <p>No se encontraron resultados</p>
          )}
        </>
      )}
    </>
  );
}*/

export default App;