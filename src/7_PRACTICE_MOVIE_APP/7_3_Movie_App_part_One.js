import {useState,useEffect} from "react";
import PropTypes from "prop-types";

/**
 * 7 [UPDATE] PRACTICE MOVIE APP
 * 7_3_Movie_App_part_One
 */
function App() {
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    console.log(movies)
    useEffect(() => getMovies,[])
    /**
     * jQuery를 사용했을때 항상 ajax로 데이터를 받아오면 for문을 사용해서 html 요소를 렌더링했다.
     * jQuery 사용했을때와는 다르게 코드가 너무나도 간편해졌다.
     * map() 함수와 useState룰 사용하여 html 요소들을 간단한 코드로 렌더링 할 수 있다.
     * 혁신적이다.
     */
    return (
        <div>
            {
                loading ? <h1>Loading...</h1> :
                    <div>
                        {
                            movies.map((movie,index) =>
                            <div ket={movie.id}>
                                <img src={movie.medium_cover_image}/>
                                <h2>title : {movie.title}</h2>
                                <p>{movie.summary}</p>
                                <ul>
                                    {movie.genres.map((g) => (
                                        <li key={g}>{g}</li>
                                    ))}
                                </ul>
                            </div>
                            )
                        }
                    </div>
            };
        </div>
    );
}

export default App;
