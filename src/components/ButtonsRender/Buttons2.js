const Buttons2 = ({totalPages, setPage}) => {
    return (
        <div className="shortcutButtons">
                <button 
                    className="btn btn-dark"
                    onClick={()=> setPage(totalPages/totalPages)}
                >
                    Start
                </button>
                <button 
                    className="btn btn-dark"
                    onClick={()=> setPage((totalPages/totalPages)+49)}
                >
                    50+
                </button>
                <button 
                    className="btn btn-dark"
                    onClick={()=> setPage((totalPages/totalPages)+99)}
                >
                    100+
                </button>
                <button 
                    className="btn btn-dark"
                    onClick={()=> setPage(totalPages)}
                >
                    End
                </button>
        </div>
    );
}
 
export default Buttons2;