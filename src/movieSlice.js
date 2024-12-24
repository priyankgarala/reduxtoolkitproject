import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: [
        {id:1, name:"Interstellar"}, 
        {id:2, name:"Inception"},
    ],
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        addMovie:(state, action) => {
            const newMovie = {
            id:state.movies[state.movies.length-1]+1,
            name: action.payload,
        };
            state.movies.push(newMovie);
        },
        removeMovie:(state, action) => {
            state.movies = state.movies.filter( 
            // creates a new array by filtering the id of the movie whose delete is clicked
                (movie) => movie.id !== action.payload
            )
        }
    }
});

export const {addMovie, removeMovie} = movieSlice.actions;
export default movieSlice.reducer; // this is movieReducer (you can give any name)...
