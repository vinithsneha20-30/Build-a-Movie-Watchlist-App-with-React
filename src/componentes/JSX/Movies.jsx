import axios from 'axios';
import '../CSS/Movies.css';
import { useState,useEffect } from 'react';

export default function Movies({ WatchList = [], AddWatchList }) {
    const [ movies, setMovies ] = useState([]); 
    const [ Loading, setLoading ] = useState(true);
    const [ SelectedGenres, setSelectedGenres ] = useState("All"); 
    const Genres = [ "All", "Action", "Comedy", "Horror", "Thriller", "Channel", "Animation", "Cartoon" ]; 



    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('./movies.json');
                setMovies(response.data);
                setLoading( false );
            } catch (error) {
                console.error("Error loading local movies.json:", error);
                setLoading( false );
            }
        };

        fetchMovies();
    }, []);

    const FilteredMovies = movies.filter( MOVIE => {
        const MOVIE_GENRES = MOVIE.genre || MOVIE.genres || [];
        if ( SelectedGenres === "All" ) return true;
        return MOVIE_GENRES.includes( SelectedGenres );
    } );

    if( Loading ){
        return (
            <h1 className="text-center py-5 min-vh-100 align-content-center" style={{ color: "black" }}>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">FETCHING MOVIES...</p>
            </h1>
        );
    };


    return (
        <>
            <div className=' d-flex align-items-center justify-content-center my-5'>
                {Genres.map( G => (
                    <button key={ G } onClick={ () => {setSelectedGenres(G)} } className={`btn btn-sm rounded-5 mx-2`} style={{ backgroundColor: SelectedGenres === G ? 'orange' : 'black' }}>{G}</button>
                ) )}
            </div>

            <div className={` ${ FilteredMovies.length > 0 ? ` movie-grid-matrix` : 'd-flex align-items-center justify-content-center mx-auto min-vh-100' }`}>
                { FilteredMovies.length > 0 ? (
                    FilteredMovies.map( MOVIE => {
                        const IsInWatchList = WatchList.some( W => W.imdbid === MOVIE.imdbid )
                        return (
                        <div className="card bg-dark text-white p-3 border-secondary h-100 shadow gap-3" key={MOVIE.id || MOVIE.title}>
                            <div className="mb-3" style={{ overflow: 'hidden', borderRadius: '8px', width: '250px', height: '350px' }}>
                                <img src={ MOVIE.image } alt={ MOVIE.title } className='w-100 h-100 object-fit-cover'/>
                            </div>
                            <h4 className="fw-bolder fst-italic">{MOVIE.title}</h4>
                            <h6 className='fw-bolder' key={MOVIE.imdbid + MOVIE.rank}>Rating: { MOVIE.rating } <i className='bi bi-star'></i></h6>
                            <h6 className="fw-bolder" key={MOVIE.rank}>Genres: { MOVIE.genre.slice(0,3).map( G => (
                                <span className='bg-secondary px-2 text-light fst-italic ms-5 rounded-4'>{ G }</span>
                            ) ) }</h6>
                            <button className={`w-100 fw-bolder fst-italic  ${ IsInWatchList ? 'bg-danger': 'bg-primary' }  border-0 rounded-5 mb-5`} onClick={ () => { AddWatchList(MOVIE) } }>{ !IsInWatchList ? 'Add To Watch List +': 'Remove From Watch List -' }</button>
                        </div>
                        )
                    }
                ) ) : <h3 className="fw-bolder fst-italic bg-danger text-white px-5 rounded-5 ">NO MOVIES FOUND</h3> }
            </div>
        </>
    )
}
