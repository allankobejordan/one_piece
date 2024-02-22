function Paginacao(){
    return(
    <>
            <div>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
            </button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={lastIndex >= data.length}>
            Next
            </button>
        </div>
        </div>
    </>
    )
}