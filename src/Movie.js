export default function Movie(props) {

    return (
        <li key={props.movie.title}>{props.movie.title} ({props.movie.year})
            <button onClick={() => props.delete()}>Delete movie</button>
        </li>
    );
}