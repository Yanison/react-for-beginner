import {useState,useEffect} from "react";

/**
 * State를 배울때는 useState를 사용해서 변수의 상태를 관리하고 바로 UI에 반영할 수 있었다.
 * UseEffect는 원하는 특정 상태가 변경되었을때만 실행된다.
 * 제이쿼리에서는 이런식으로 하려면 더 복잡한 코드를 작성했어야 했다.
 */
function App() {
    const [counter, setCounter] = useState(0);
    const [keyword,setKeyword] = useState("");
    const increment = () => setCounter((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    useEffect(() => {
        console.log("i run all the time");
    }, []);
    useEffect(()=>{
        console.log("i run when 'counter' changes");
    }, [counter]);
    //console.log("saerch for keyword",keyword); // 이렇게 하면 모든 이벤트 리스너가 호출될떄마다 실행된다. useEffect를 사용하면 해결할 수 있다.
    useEffect(() =>{
        if(keyword !== "" && keyword.length > 5){
            console.log("saerch for keyword",keyword)
        }
    },[keyword]);
  return (
    <div>
        <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
        />
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
