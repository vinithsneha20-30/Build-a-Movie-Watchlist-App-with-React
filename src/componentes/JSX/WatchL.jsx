import React from 'react'

export default function WatchList({ isOpen, onClose, WatchList = [], onRemove, WatchCount }) {
    return (
        <>
            <div 
                className={`position-fixed top-0 start-0 w-100 h-100 bg-black ${isOpen ? 'opacity-75 visible' : 'opacity-0 invisible'}`}
                style={{ 
                    transition: 'all 0.3s ease-in-out', 
                    zIndex: 1040,
                    backdropFilter: 'blur(3px)'
                }}
                onClick={onClose}
            />
            <div 
                className="position-fixed top-0 end-0 h-100 bg-dark text-white shadow-lg d-flex flex-column"
                style={{ 
                    width: '100%', 
                    maxWidth: '450px', 
                    zIndex: 1050,
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderLeft: 'solid blue',
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                }}
            >
                <div className="text-white d-flex flex-column justify-content-between vh-100 p-3 mx-5">
                    <div className='rounded-bottom-5'>
                        <h3 className='fst-italic fw-bolder d-flex justify-content-center rounded-bottom-5 border-bottom border-5 border-primary w-100 bg-black mb-5'><span style={{ color: 'darkviolet' }} >Watch</span> List</h3>
                        
                        <div className={`rounded-5 table-responsive mb-5 ${ WatchCount > 6 ? 'overflow-y-auto' : '' }`} style={{ maxHeight: '85vh' }}>
                            <table className='table table-dark table-hover align-middle text-center mb-5 rounded-5 sticky-top'>
                                <thead className='bg-black'>
                                    <th>Roll No.</th>
                                    <th>Movie-pic</th>
                                    <th>Movie-Title</th>
                                    <th>Rating</th>
                                    <th>Delete</th>
                                </thead>
                            {WatchList.map( ( MOVIE, INDEX )  => (
                                <tbody>
                                    <tr>
                                        <td>
                                            { INDEX+1 }
                                        </td>
                                        <td>
                                            <img src={ MOVIE.image } alt={ `${ MOVIE.title } pic` } style={{ width: '50px', height: '75px' }} />
                                        </td>
                                        <td className='align-middle w-25'>
                                            <h5 className="fw-bolder fst-italic text-wrap"> { MOVIE.title } </h5>
                                        </td>
                                        <td>
                                            <h6>Rating: { MOVIE.rating } <i className="bi bi-star"></i> </h6>
                                        </td>
                                        <td className="fw-bolder bg-danger" style={{ cursor: 'pointer' }} onClick={ () => { onRemove( MOVIE ) }}>
                                            <i className="bi bi-trash" ></i>
                                        </td>
                                    </tr>
                                </tbody>
                        ) ) }
                        </table>
                    </div>
                    </div>
                    <button className="btn rounded-5 bg-danger fw-bolder fs-6 h2" onClick={ onClose }>Close</button>
                </div>

            </div>
        </>

    );
}