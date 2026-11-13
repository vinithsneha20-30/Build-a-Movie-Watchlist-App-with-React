import '../CSS/NavBar.css';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "black" }} className='rounded-top-5 mt-5 p-5 sticky'>
        <div className="bg-dark rounded-5 mt-5 justify-content-between row">
            <div className='col-4'>
                <h3 href="#" className="fw-bolder"><i style={{ color: 'violet' }}>Movies</i><i className="text-white">Hub</i></h3>
                <p className="text-muted">Discover, explore, and track your favorite movies all in one place. Movie Hub brings you curated recommendations, ratings, and updates from the world of cinema.</p>
            </div>
            <div className='col-2'>
                <h3 className="fw-bolder">QUICK LINK</h3>
                <ul className="navbar-nav my-auto justify-content-center alighn-items-center mt-5">
                    <li className="nav-item"><a href="#" className="nav-link fw-bolder ancher">HOME</a></li>
                    <li className="nav-item"><a href="#" className="nav-link fw-bolder ancher">MOVIES</a></li>
                    <li className="nav-item"><a href="#" className="nav-link fw-bolder ancher">BLOCK-BUSTER</a></li>
                    <li className="nav-item"><a href="#" className="nav-link fw-bolder ancher">CONTACT</a></li>
                </ul>
            </div>
            <div className="col-2">
                <h3 className="fw-bolder mb-5 mx-5">CONTACT</h3>
                <h4 className='mx-auto'>
                    { ['github', 'whatsapp', 'linkedin' ].map( I => (
                    <i className={`bi bi-${I} fs-5 mx-5 ancher`}  style={{ cursor: 'pointer' }}></i>
                ) ) }
                </h4>
            </div>
        </div>
    </footer>
  )
}
