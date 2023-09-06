import React,{useState} from "react"
import MovieCard from "./MovieCard"

export default function SearchMovie(){
    
    const [query,setQuery] = useState("")
    const [movies,setMovies] = useState([])
    
    
    const searchFunc = async (e) => {
        e.preventDefault()
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=ea6dcd9b6d4cccc44b0a39af7f424bc9&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url)
            const data = await res.json()
            // console.log(data.results)
            setMovies(data.results)
        }catch(err) {
           console.log(err) 
        }
    }
    
    
    return (
        <>
            <form className="form" onSubmit={searchFunc}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Avengers" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </>
    )
}