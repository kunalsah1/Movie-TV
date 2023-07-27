import React from 'react'
import Tv from './Tv'


const TvSection = () => {
    document.title = 'TV Series - Movie TV'
    return (
        <div className="movie-container">

            <div>
                <h1>Top Rated</h1>
                <div className='cont2'>
                    <Tv category="top_rated" />
                </div>
            </div>

            <div>
                <h1>Trending</h1>
                <div className='cont2'>
                    <Tv category="popular" />
                </div>
            </div>

            <div>
                <h1>Now Playing</h1>
                <div className='cont2'>
                    <Tv category="on_the_air" />
                </div>
            </div>
            <div>
                <h1>Airing Today</h1>
                <div className='cont2'>
                    <Tv category="airing_today" />
                </div>
            </div>
        </div>
    )
}

export default TvSection
