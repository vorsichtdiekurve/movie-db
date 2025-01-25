import Movie from "./Movie";

export default function MovieList(props) {

    return (
        <div><h2>Titles</h2>
            <ul>
                {props.movies.map(movie => <Movie movie={movie}/>)}
            </ul>
        </div>
    );
}