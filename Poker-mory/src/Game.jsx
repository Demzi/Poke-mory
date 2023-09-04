const Game = ({pokemon,handleChosenPokemons}) =>{
return(
    <div className="content">
        <div className="pokemon-card-container">
            {pokemon.map(pok =>(
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