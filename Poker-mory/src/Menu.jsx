import { useEffect, useState } from "react";
import Game from "./Game";
import Loading from "./Loading";

const Menu = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [showGame, setShowGame] = useState(false);
    const [isChosen,setIsChosen] = useState([]);
    const [isOver,setIsOver] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [score,setScore] = useState(0);
    const getPokemonList = async (listLength) => {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/`;
        const offset = Math.floor(Math.random() * (500 - listLength));
        const pokemonPromise = [];
      
        const makeApiCall = async (i) => {
          try {
            const response = await fetch(apiUrl + (offset + i) + "/");
            const data = await response.json();
            const pokemon = {
              name: data.name,
              image: data.sprites.other.dream_world.front_default,
            };
            return pokemon;
          } catch (error) {
            console.error(`Error fetching data for index ${i}:`, error);
            throw error;
          }
        };
        for (let i = 0; i < listLength; i++) {
          pokemonPromise.push(makeApiCall(i));
        }
        try {
          const resolvedPokemon = await Promise.all(pokemonPromise);
          return resolvedPokemon;
        } catch (error) {
          console.error('Error in getPokemonList:', error);
          throw error; 
        }
      };
  
    useEffect(() => {
    }, []);
  
    const handleLoading = async (listLength) => {
        setIsLoading(true);
        const list = await getPokemonList(listLength);
        console.log(list);
        setPokemonList(list);
        setIsLoading(false);
        setShowGame(true);
    };
    const handleChosenPokemons = (pokemon) =>{
        if(isChosen.some(element => element.name == pokemon.name)) setIsOver(true); 
        else{
            setIsChosen(prev => [...prev, pokemon]); 
            setScore(prev => prev+1);
        } 
        console.log(isOver);
        console.log(isChosen);
    }
    return (
        <>
          {showGame && !isOver ? (
            <Game pokemon={pokemonList} handleChosenPokemons={handleChosenPokemons} />
          ) : null}
      
          {isOver ? (
            <>
            <p>Game Over: </p>
            <p> Score {score}</p>
            </>
          ) : null}
      
          {!showGame ? (
            <div className="menu">
              <div className="menu-container">
                <div className="level-container">
                  <button className="easy" onClick={() => handleLoading(10)}>
                    Easy
                  </button>
                  <button className="medium" onClick={() => handleLoading(16)}>
                    Medium
                  </button>
                  <button className="hard" onClick={() => handleLoading(20)}>
                    Hard
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </>
      );
}
export default Menu;