import React from 'react'


const MovieList = ({ movies,search }) => {
    return (
      <>

<section className="cards">

<div className="content">
  {movies.filter((e) => {
    return e.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  }).map((e) =>

  (
    <div className="card">

      <img src={e.Poster} alt='movoe'></img>
      <h6>{e.Title}</h6>
    </div>
  )

  )}

</div>


</section>
      </>
    )
}

export default MovieList