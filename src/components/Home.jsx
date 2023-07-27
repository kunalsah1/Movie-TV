import React, { useEffect, useState } from 'react'
import { oppenheimer, barbie, flash } from '../carousel/images'
import AllList from './AllList'


const Home = () => {
    document.title = 'Movie TV'
    const allUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=a3cd347334f7e3fe81101d7ab32af7f1`
    const [all, setAll] = useState([])


    const fetchData = async () => {
        try {
            const response = await fetch(allUrl)
            const data = await response.json()
            setAll(data.results)


        } catch (error) { }

    }


    useEffect(() => {
        fetchData()

    }, [])

    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={oppenheimer} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={barbie} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={flash} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='trending'>
                <h1>Trending</h1>
                <div className="all-section">
                    {all.map((all, index) => (
                        <AllList
                            key={index}
                            title={all.original_title ? all.original_title : all.original_name}
                            img={all.backdrop_path}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default Home
