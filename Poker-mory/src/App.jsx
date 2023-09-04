import { useState,useEffect } from "react";
import Background from './Background'
import Loading from "./Loading";
import Menu from "./Menu";
import Game from "./Game";
const App = () => {
    const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const [pokemon,setPokemon] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [isMenu,setIsMenu] = useState(true);
    const [isgame,setIsGame] = useState(false);
    const [chosenPokemons,setChosenPokemons] = useState([]);
    useEffect(() => {
        const  getPokemonList = async () => {
            try {
                const response = await fetch(apiURL);
                const data = await response.json();
                return data;
              } catch (error) {
                console.error("Error fetching data:", error);
              }
        }
        const getPokemon = async (pokemonList,index) => {
            try {
                const data = await fetch(pokemonList.results[index].url);
                const onepokemon = await data.json();
                console.log(onepokemon);
                const pokemonJpg = onepokemon.sprites.other.dream_world.front_default;
                const pokemonName = onepokemon.name;
                const newPokemon = {
                  image:pokemonJpg,
                  name:pokemonName
                }
                setPokemon(prev => [...prev, newPokemon]);
            } 
            catch (error) {
                console.error("Error fetching data:", error);
            }
      };
      const createPokemonSet = async () => {
        const pokemonList = await getPokemonList();
        for(let i=0; i<10; i++){
            const index = Math.floor(Math.random() *500);
            getPokemon(pokemonList,index);
            
        }
      }
      createPokemonSet();
    }, []);
    const handleChosenPokemons = (pok) =>{
      if (chosenPokemons.every(chosen => chosen.name !== pok.name)) {
          setChosenPokemons(prev => [...prev,pok]);
          console.log(chosenPokemons);
        }
  }
    /*
    
    */
   const handleLoading = (pokemonSetLength) =>{
    setIsLoading(true);
    setIsMenu(false);
    setTimeout(() => {
      setIsLoading(false);
      setIsGame(true);
    }, 1000);
   }
return (
  <>
  {isLoading ? (
    <Background>
      <Loading />
    </Background>
  ) : isMenu ? (
    <Background>
      <Menu handleLoading={handleLoading} /> 
    </Background>
  ) : (
    <Game pokemon={pokemon} handleChosenPokemons={handleChosenPokemons}/>
  )}
</>
)
}
export default App;