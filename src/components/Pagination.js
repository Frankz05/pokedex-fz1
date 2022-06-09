import Buttons1 from "./ButtonsRender/Buttons1";
import Buttons2 from "./ButtonsRender/Buttons2";

const Pagination = ({pokemons, pokePerPage, page, setPage}) => {

    const totalPages = Math.ceil(pokemons?.length / pokePerPage);
    
    const renderButtons =()=>{
        if (totalPages > 100) {
            return(
                <div>
                    <Buttons1 page={page} setPage={setPage} totalPages={totalPages}/>
                    <Buttons2 totalPages={totalPages} setPage={setPage}/>
                </div>
            )

        }else{
            return(
                <Buttons1 page={page} setPage={setPage} totalPages={totalPages}/>
            )
        }
    }

    return(
        <div className="buttonsPag">
            {renderButtons()}
        </div>
    )

}
 
export default Pagination;