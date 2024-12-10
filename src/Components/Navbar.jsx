import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand" href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" className='img-fluid w-25 h-auto' alt="IMDb Logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-list"></i> Menu</a>
            </li>
          </ul>

          <form className="d-flex mx-auto search-bar" role="search">
            <select className="form-select w-auto me-2">
              <option>All</option>
              <option>Titles</option>
              <option>TV Episodes</option>
              <option>Celebs</option>
              <option>Companies</option>
            </select>
            <input className="form-control" type="search" placeholder="Search IMDb" aria-label="Search" />
            <button className="btn btn-outline-secondary" type="submit"><i className="bi bi-search"></i></button>
          </form>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">IMDbPro</a>
            </li>
            <li className="nav-item">
              <Link to='/watchlist' className="nav-link" href="#"><i className="bi bi-bookmark"></i> Watchlist</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sign In</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                EN
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                <li><a className="dropdown-item" href="#">EN</a></li>
                <li><a className="dropdown-item" href="#">ES</a></li>
                <li><a className="dropdown-item" href="#">FR</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar