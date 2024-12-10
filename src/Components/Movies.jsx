import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/moviesReducers'

const Movies = () => {
    // const [movieList, setMovieList] = useState([])
    const dispatch = useDispatch()
    const movieList = useSelector((state) => state.moviesData.data)
    console.log(movieList)
  
    const url = 'https://dummyapi.online/api/movies'

    useEffect(() => {
        dispatch(fetchData(url))
        // getMoviesData()
    }, [])

    // const getMoviesData = async () => {
    //     const {data} = await axios('https://dummyapi.online/api/movies')
    //     console.log(data)
    //     setMovieList(data)
    // }

    return (
        <div className='bg-black'>
            <div className="container mb-5 py-5">
                <div className="row row-cols-1 row-cols-md-6 g-4">
                    {
                        movieList && movieList.length > 0 && movieList.map((list) => (
                            <div className="col" key={list.id}>
                                <Link to={`moviedetails/${list.id}`}>
                                      <div className="card h-100">
                                        <img src={`./${list.image}`} className="card-img-top" alt={list.movie} />
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="card-rating">★ {list.rating}</span>
                                            </div>
                                            <h5 className="card-title">{list.movie}</h5>
                                            <div className="d-flex justify-content-center">
                                                <a href="#" className="btn btn-primary my-3">Watch options</a>
                                            </div>
                                            <a href="#" className="btn btn-outline-secondary btn-trailer">Trailer</a>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Movies