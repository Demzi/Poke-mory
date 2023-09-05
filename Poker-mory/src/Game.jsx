const Game = ({pokemon,handleChosenPokemons}) =>{
    const displayedPokemon = [];

  while (displayedPokemon.length < pokemon.length /2) {
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    const randomPokemon = pokemon[randomIndex];

    // Check if the randomPokemon is not already in displayedPokemon
    if (!displayedPokemon.some((pok) => pok.name === randomPokemon.name)) {
      displayedPokemon.push(randomPokemon);
    }
  }
return(
    <div className="content">
        <div className="pokemon-card-container">
            {displayedPokemon.map(pok =>(
                <div className="pokemon-card"onClick={()=>{handleChosenPokemons(pok)}}>
                    <p className="name">{pok.name}</p>
                    <img src={pok.image} alt="" />
                </div>
            ))}
        </div>
    </div>
)
}
export default Game;