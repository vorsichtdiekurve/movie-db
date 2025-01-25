import Movie from "./Movie";

export default function MovieList(props) {

    return (
        <div><h2>Titles</h2>
            {props.movies.length > 0 &&
            <ul>
                {props.movies.map(movie => <Movie movie={movie}/>)}
            </ul>
            }
            {props.movies.length === 0 && <label>No movies in list!</label>}
        </div>
    );
}