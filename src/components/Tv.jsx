import React, { useEffect, useState } from 'react'
import TvList from './TvList'


const Tv = (props) => {

    const TvUrl = `https://api.themoviedb.org/3/tv/${props.category}?api_key=a3cd347334f7e3fe81101d7ab32af7f1`

    const [tv, setTv] = useState([])
    const fetchTvData = async () => {
        try {
            const res = await fetch(TvUrl)
            const data = await res.json()
            setTv(data.results)
            console.log(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTvData()
    }, [])

    return (
        <div className='tv'>
            {tv.map((series, index) => (
                <TvList
                    key={index}
                    title={series.original_name}
                    img={series.backdrop_path}
                />
            ))}
        </div>
    )
}

export default Tv
