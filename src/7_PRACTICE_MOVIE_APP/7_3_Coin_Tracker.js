import {useState,useEffect} from "react";
import PropTypes from "prop-types";

/**
 * 7 [UPDATE] PRACTICE MOVIE APP
 * 7_3_Coin_Tracker
 */
function App() {
    const [loading,setLoading] = useState(true);
    const [coins,setCoins] = useState([]) // 당연한 얘기지만 api를 사용해서 배열을 얻어올때는 [] 로 초기화 해야한다.
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    },[])
    return (
        <div>
            <h1>The Coins! ({loading ? "" : coins.length})</h1>
            {loading ? <strong>Loading...</strong> : <strong>We are ready</strong>}
            <ul>
                {coins.map((coin,index) => <li>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</li>)}
            </ul>
        </div>
    );
}

export default App;
