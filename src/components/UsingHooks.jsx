import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subtraction, addition, addByRandom } from "../actions";

function UsingHooks() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [num, setNum] = useState();

  return (
    <div className="bg-gray-600 w-full h-screen flex flex-col font-semibold justify-center items-center">
      <div className="text-2xl bg-orange-200 text-gray-900 rounded font-semibold p-3">
        <h1>Using the hooks for accessing redux store </h1>
      </div>
      <div className="text-2xl mt-10 bg-pink-200 text-gray-900 rounded font-semibold p-3">
        <h1> Value :- {value} </h1>
      </div>

      <div className="m-10">
        <button
          onClick={() => dispatch(addition())}
          className="rounded-md m-2 p-2 text-black font-semibold bg-yellow-100"
        >
          Increase By 1
        </button>
        <button
          onClick={() => dispatch(subtraction())}
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
          onClick={() => dispatch(addByRandom(num))}
          className="rounded-md m-2 py-2 px-2 border-2 border-gray-600 text-black font-semibold bg-yellow-100"
        >
          Increase By Value
        </button>
      </div>
    </div>
  );
}

export default UsingHooks;
