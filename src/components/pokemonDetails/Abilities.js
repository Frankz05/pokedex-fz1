const Abilities = ({pokemon}) => {
    return (
        <div className="boxAbilities">
            <h3>Abilities</h3>
            <div className="abilities">
                {
                    pokemon.abilities?.length > 1 ?
                    <div className="twoAbilities">
                        <p className="abilitie1">
                            <b>
                                {pokemon.abilities?.[0]?.ability.name.charAt(0).toUpperCase()}
                                {pokemon.abilities?.[0]?.ability.name.slice(1)}
                            </b>
                        </p>
                        <p className="abilitie2">
                            <b>
                                {pokemon.abilities?.[1]?.ability.name.charAt(0).toUpperCase()}
                                {pokemon.abilities?.[1]?.ability.name.slice(1)}
                            </b>
                        </p>
                    </div>
                    :
                    <div className="oneAbilitie">
                        <p className="abilitie1">
                            <b>
                                {pokemon.abilities?.[0]?.ability.name.charAt(0).toUpperCase()}
                                {pokemon.abilities?.[0]?.ability.name.slice(1)}
                            </b>
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default Abilities;