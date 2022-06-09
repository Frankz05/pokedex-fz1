const Type = ({pokemon}) => {
    return (
        <div className="boxType">
            <h3>Type</h3>
            <div className="types">
                {
                    pokemon.types?.length > 1 ?
                    <div className="twoTypes"> 
                        <p className="type1">
                            <b>
                                {pokemon.types?.[0]?.type.name.charAt(0).toUpperCase()}
                                {pokemon.types?.[0]?.type.name.slice(1)}
                            </b>
                        </p> 
                        <p className="type2">
                            <b>
                                {pokemon.types?.[1]?.type.name.charAt(0).toUpperCase()}
                                {pokemon.types?.[1]?.type.name.slice(1)}
                            </b>
                        </p>  
                    </div>
                    :
                    <div className="oneType">
                        <p className="type1">
                            <b>
                                {pokemon.types?.[0]?.type.name.charAt(0).toUpperCase()}
                                {pokemon.types?.[0]?.type.name.slice(1)}                                    
                            </b>
                        </p>
                    </div>
                                        
                }
            </div>
        </div>
    );
}
 
export default Type