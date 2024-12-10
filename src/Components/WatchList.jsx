import React from 'react'
import { useSelector } from 'react-redux'

const WatchList = () => {
    const watchListData = useSelector((state)=>state.watchListData)
    console.log(watchListData)

  return (
    <div className='bg-black'>
    <div className="container mb-5 py-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                watchListData && watchListData.length > 0 && watchListData.map((list) => (
                    <div className="col" key={list.id}>
                        {/* <Link to={`moviedetails/${list.id}`}> */}
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
                        {/* </Link> */}
                    </div>
                ))
            }

        </div>
    </div>

</div>
  )
}

export default WatchList