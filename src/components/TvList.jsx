import React from 'react'

const getPoster = (poster) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster}`
}

const TvList = (props) => {
    return (
        <>
            <div className='cards'>
                <div className="img-poster">
                    <img src={getPoster(props.img)} alt="" />
                    <h3>{props.title}</h3>
                </div>

            </div>
        </>
    )
}

export default TvList
