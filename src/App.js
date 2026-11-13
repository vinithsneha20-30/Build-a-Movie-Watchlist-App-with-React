import { useEffect, useState } from 'react';
import NavBar from './componentes/JSX/NavBar';
import Movies from './componentes/JSX/Movies';
import Footer from './componentes/JSX/Footer';
import WatchL from './componentes/JSX/WatchL';

export default function App() {

  useEffect( () => { document.body.style.backgroundColor = "white" } );
  const  [ WatchList, setWatchList ] = useState([]);
  const [ WatchListOpen, setWatchListOpen ] = useState(false);
  const WatchCount = WatchList.length;

  const handleAddToWishlist = (movie) => {
      const exists = WatchList.some(item => 
        (item.imdbid && movie.imdbid && item.imdbid === movie.imdbid) || 
        (item.title && movie.title && item.title.trim().toLowerCase() === movie.title.trim().toLowerCase())
      );

      if (exists) {
        setWatchList(WatchList.filter(item => 
          !((item.imdbid && movie.imdbid && item.imdbid === movie.imdbid) || 
            (item.title && movie.title && item.title.trim().toLowerCase() === movie.title.trim().toLowerCase()))
        ));
      } else setWatchList([...WatchList, movie]);
    };


console.log( "WatchList", WatchListOpen )
console.log( "Watch", WatchList )
  return (
    <>
      <NavBar WatchCount = { WatchCount } IsWatchListOpen = { () => setWatchListOpen( true ) }></NavBar>
      <Movies WatchList = { WatchList } AddWatchList = { handleAddToWishlist }></Movies>
      <WatchL 
        isOpen = { WatchListOpen }
        onClose = { ()  => setWatchListOpen( false ) }
        WatchList = { WatchList }
        onRemove = { handleAddToWishlist }
        WatchCount = { WatchCount }
      ></WatchL>
      <Footer></Footer>
    </>
  );
}
