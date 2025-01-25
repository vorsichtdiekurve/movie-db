export default function MovieForm(props) {

    return (
        <li key={props.movie.title}>{props.movie.title} ({props.movie.year})</li>
    );
}