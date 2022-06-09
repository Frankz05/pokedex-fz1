const Buttons1 = ({page, setPage, totalPages}) => {
    return (
        <div className="paginated">
            <button
                className="btn btn-danger"
                onClick={()=> setPage(page -1)}
                disabled={ page <= 1}
            >
                <i class="fa-solid fa-angles-left"></i>
            </button>
            <input value={page}/>
            <h3> of {totalPages}</h3>
            <button
                className="btn btn-danger"
                onClick={()=> setPage(page +1)}
                disabled={ page >= totalPages}
            > 
                <i class="fa-solid fa-angles-right"></i>
            </button>
        </div>
    );
}
 
export default Buttons1;