import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Link 를 사용하면 a태그 대신에 페이지를 이동할수 있다. a랑 다른점은 새로고침이 일어나지 않는다는 것.
 */
function Movie({id,coverImg,title,summary,genres}){

    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>title : {title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.prototype ={
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;