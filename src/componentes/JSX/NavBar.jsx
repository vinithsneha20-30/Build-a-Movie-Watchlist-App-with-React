import React from 'react'
import '../CSS/NavBar.css';     

export default function NavBar({ WatchCount, IsWatchListOpen }) {
  return (
    <header className='sticky-top'>
        <nav className='navbar navbar-expand-lg navbar-dark rounded-bottom-5'>
            <div className="container">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwv7zbtazKmioFiCEJEGbC7iQj6QGlqpvvirGjguJyCw&s"  className='rounded-5 me-5' style={{ width: "40px" }} alt="MOVIE-HUB BRAND LOGO" />
                    <a href="#" className='navbar-brand fw-bolder'><i style={{ color: "violet" }}>Movie</i><i>Hub</i></a>
                </div>
                
                <ul className="navbar-nav d-flex mx-auto flex-row">
                    <li className="nav-item"><a href="#" className="nav-link fw-bolder ancher">HOME</a></li>
                    <li className="nav-item"><a href="#" className="nav-link fw-bolder ancher">MOVES</a></li>
                    <li className="nav-item"><a href="#" className="nav-link fw-bolder ancher">BLOCK-BUSTER</a></li>
                    <li className="nav-item"><a href="#" className="nav-link fw-bolder ancher">CONTACT</a></li>
                </ul>

                <div>
                    <input type="text" className="rounded-pill fw-bolder text-center-text-warning placeholder-glow" placeholder="   Search Movies..." />
                    <button className="fw-bolder rounded-5 border-0 ms-5" onClick={ IsWatchListOpen }><i className="text-white bi bi-heart"></i> <sup style={{ color: "red", font: "bolder", fontStyle: "italic", fontSize: "11px" }}>{ WatchCount }</sup></button>
                </div>
            </div>
        </nav>
    
    </header>
  )
}
