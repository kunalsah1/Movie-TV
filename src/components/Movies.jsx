import React, { useEffect, useState } from 'react'
import MoviesList from './MoviesList'



const Movies = (props) => {
    const url = `https://api.themoviedb.org/3/movie/${props.category}?api_key=a3cd347334f7e3fe81101d7ab32af7f1`


    const [movie, setMovie] = useState([])

    const fetchData = async () => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovie(data.results)
        } catch (error) {
            console.log(error)
        }

    }





    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <div className='movie'>
                {movie.map((mov, index) => (
                    <MoviesList
                        key={index}
                        title={mov.original_title}
                        img={mov.backdrop_path}
                    />
                ))}
            </div>

        </>
    )
}

export default Movies
