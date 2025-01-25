import Movie from "./Movie";

export default function MovieList(props) {

    function deleteMovie(movie) {
        const index = props.movies.indexOf(movie);

        if (index > -1) {
            props.movies.splice(index, 1)
        }
        
    }

    return (
        <div><h2>Titles</h2>
            {props.movies.length > 0 &&
            <ul>
                {props.movies.map(movie => <Movie movie={movie} delete={() => deleteMovie(movie)}/>)}
            </ul>
            }
            {props.movies.length === 0 && <label>No movies in list!</label>}
        </div>
    );
}