import React, { useState } from "react";
import { connect } from "react-redux";
import { subtraction, addition, addByRandom } from "../actions";

function UsingConnect({ value, dispatch, addition, subtraction, addByRandom }) {
  const [num, setNum] = useState();
  return (
    <div className="bg-gray-600 w-full h-screen flex flex-col font-semibold justify-center items-center">
      <div className="text-2xl bg-orange-200 text-gray-900 rounded font-semibold p-3">
        <h1>Using the Connect for accessing redux store </h1>
      </div>
      <div className="text-2xl mt-10 bg-pink-200 text-gray-900 rounded font-semibold p-3">
        <h1> Value :- {value} </h1>
      </div>

      <div className="m-10">
        <button
          onClick={() => {
            addition()
            setNum("")
          }}
          className="rounded-md m-2 p-2 text-black font-semibold bg-yellow-100"
        >
          Increase By 1
        </button>
        <button
          onClick={() => {
            subtraction()
            setNum("")
          }}
          className="rounded-md m-2 p-2 text-black font-semibold bg-yellow-100"
        >
          Decrease By 1
        </button>
      </div>

      <div>
        <input
          type="text"
          className="border-2 border-gray-600 rounded px-2 py-2"
          onChange={(e) => setNum(Number(e.target.value))}
          value={num}
          placeholder="Add Custom Value"
        />

        <button
          onClick={() => {
            addByRandom(num);
            setNum("");
          }}
          className="rounded-md m-2 py-2 px-2 border-2 border-gray-600 text-black font-semibold bg-yellow-100"
        >
          Increase By Value
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.value, // Map the relevant state properties to props
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Map your action creators to props
    addition: () => dispatch(addition()),
    subtraction: () => dispatch(subtraction()),
    addByRandom: (num) => dispatch(addByRandom(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsingConnect);
