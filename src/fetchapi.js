
// https://api.themoviedb.org/3/movie/550?api_key=7c2dd11a7cca2cabc0ce2e539b616429
const fetch_all_movies = async()=>{
    const raw_data = await fetch('https://api.themoviedb.org/3/search/movie?api_key=7c2dd11a7cca2cabc0ce2e539b616429')
    const movies = await raw_data.json()
    console.log(movies)
    return(movies)

}

export{
    fetch_all_movies
}
