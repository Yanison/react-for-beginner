import {useState,useEffect} from "react";
import PropTypes from "prop-types";

/**
 * 7 [UPDATE] PRACTICE MOVIE APP
 * 7_0_To Do List part One
 */
function App() {
    const [toDo,setToDo] = useState("");
    const [toDos,setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            console.log("To Do is empty");
            return;
        }
        setToDo("");
        /**
         * 기존 배열에 새로운 배열을 추가하는 방법은 [새로운 배열, ...기존 배열] 이다.
         */
        setToDos(currentArray => [toDo,...currentArray]);
    }
    console.log(toDos);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write a To Do"
                />
                <button type="submit">Add To DO</button>
            </form>
            <hr />
            {toDos.map((item,index) => <li key={index} className={"todo_"+index}>{item}</li>)}
        </div>
    );
    /**
     * toDos 배열에 대해서 map() 함수를 사용하여 각각의 아이템을 출력한다.
     */
}

export default App;
