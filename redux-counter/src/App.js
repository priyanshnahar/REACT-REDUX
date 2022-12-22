import { connect } from "react-redux";
import "./App.css";
import { incrementCount, decrementCount, resetCount } from "./redux/action";

function App({ count, name, decreaseFunction, increaseFunction, resetFunction}) {
  // const handleClick= (e) => {
  //   props[e.target.name](count)
  // }
  return (
    <div className="App"> 
      <h1>{count}</h1>
      <button onClick={() =>decreaseFunction()}>Decrease</button>
      <button onClick={() =>resetFunction()}>RESET</button>
      <button onClick={() =>increaseFunction()}>Increase</button>
      <p>{name}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decreaseFunction: (count) => dispatch(decrementCount(count)),
    increaseFunction: (count) => dispatch(incrementCount(count)),
    resetFunction: (count) => dispatch(resetCount(count)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
 