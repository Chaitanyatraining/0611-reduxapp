import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movies from '../Components/Movies'
import MovieDetails from '../Components/MovieDetails'
import WatchList from '../Components/WatchList'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/watchlist' element={<WatchList />} />
        <Route path='/moviedetails/:id' element={<MovieDetails />} />
    </Routes>
  )
}

export default Routing