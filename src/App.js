import React from "react"
import SearchMovie from "./SearchMovie"
import "./App.css"
class App extends React.Component{
    render(){
        return (
            <div className="container">
                <h1 className="title">SEARCH MOVIE</h1>
                <SearchMovie />
            </div>
        )
    }
}

export default App