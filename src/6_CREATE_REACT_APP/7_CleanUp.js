import {useState,useEffect} from "react";
import PropTypes from "prop-types";

function Hello(){
    function destroyedFun(){
        console.log("destroyed :(");
    }
    function effectFn(){
        console.log("created :)");
        //return하면 컴포넌트가 사라질때 실행된다.
        return destroyedFun;
    }

    useEffect(effectFn,[])
    return <h1>Hello</h1>
};

Hello.prototype ={
    showing: PropTypes.bool.isRequired
}

/**
 * State를 배울때는 useState를 사용해서 변수의 상태를 관리하고 바로 UI에 반영할 수 있었다.
 * UseEffect는 원하는 특정 상태가 변경되었을때만 실행된다.
 * 제이쿼리에서는 이런식으로 하려면 더 복잡한 코드를 작성했어야 했다.
 */
function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => {
        setShowing((prev) => !prev);
    };
  return (
    <div>
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        {showing ? <Hello showing={showing}/> : null}
    </div>
  );
}

export default App;
