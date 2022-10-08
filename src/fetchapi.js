
// https://api.themoviedb.org/3/movie/550?api_key=
const fetch_movies = async()=>{
    const api_key ='7c2dd11a7cca2cabc0ce2e539b616429'
    const raw_data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&page=1`)
    const movies = await raw_data.json()
    const data = [...movies.results]
    return(data)

}

export{
    fetch_movies
}
