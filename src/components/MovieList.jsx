import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList=() => {
    const movies = useSelector((state) => state.movies.movies); //from store.js and movieSlice.js
    const dispatch = useDispatch();

    const handleRemoveMovie = (id) => { // id for performing operations like delete...
        dispatch(removeMovie(id));
    }

    return( 
        <div>
            {" "}
        <h1>Movie List</h1>
        {movies.map((movie) => ( // loop through every movie
            <div key={movie.id}>{movie.name}
            <button onClick={()=>handleRemoveMovie(movie.id)}>Delete</button>
            </div> // display name for each movie
        ))}
        </div>
    );
};  