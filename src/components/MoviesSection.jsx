import React from 'react'
import Movies from './Movies'


const MoviesSection = () => {

    document.title = "Movies - Movie TV"

    return (
        <div className="movie-container">
            <div>
                <h1>Top Rated</h1>
                <div className='cont2'>
                    <Movies category="top_rated" />
                </div>
            </div>

            <div>
                <h1>Upcoming</h1>
                <div className='cont2'>
                    <Movies category="upcoming" />
                </div>
            </div>

            <div>
                <h1>Trending</h1>
                <div className='cont2'>
                    <Movies category="popular" />
                </div>
            </div>

            <div>
                <h1>Now Playing</h1>
                <div className='cont2'>
                    <Movies category="now_playing" />
                </div>
            </div>
        </div>
    )
}

export default MoviesSection
