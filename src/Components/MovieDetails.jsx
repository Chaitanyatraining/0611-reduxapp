import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {ArrowLeft, ArrowLeftCircle} from 'react-feather'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/watchListReducer'

const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const [added, setAdded] = useState(false)

    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log(id)

    useEffect(() => {
        getmovieDetails()
    }, [])

    const handleAdd = (movie) => {
      dispatch(add(movie))
      setAdded(!added)
    }

    const getmovieDetails = async () => {
        const {data} = await axios(`https://dummyapi.online/api/movies/${id}`)
        console.log(data)
        setMovie(data)
      }
  return (
    <div>
        <h2>MovieDetails</h2>
        {
          movie && (
            <div className='row'>
              <div className='col-md-6'>
                <img src={`../${movie.image}`} className='img-fluid' />
              </div>
              <div className='col-md-6'>
                <h4>Movie: {movie.movie}</h4>
                <h4>Rating: {movie.rating}</h4>
                <button className='btn btn-warning' 
                onClick={()=> handleAdd(movie)}
                >{added? 'Added' : 'Add to WatchList'}</button>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default MovieDetails