const Movements = ({pokemon}) => {

    return (
        <div>
            <h3 className="titleMovements">Movements</h3>
            <div >
                {
                    pokemon.moves?.length > 1 ?
                    <div className="gridMovements">
                        {
                            pokemon.moves?.map(movement =>(
                                <p className="pMovements" key={movement.move?.url}>
                                    {movement.move?.name.charAt(0).toUpperCase()}
                                    {movement.move?.name.slice(1)}
                                </p>
                            ))
                        }
                    </div>
                    :
                    <div className="noMovements">
                        <p><b>Unknown</b></p>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default Movements;