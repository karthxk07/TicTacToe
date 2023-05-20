import React, { useRef, useState } from "react";

export const MainContainer = () => {
  let cellRef = useRef([]);
  let [activeTurn, setActiveTurn] = useState("cross");

  const checkWin = () => {};

  const runTurn = (e) => {
    console.log(e);
    activeTurn === "cross" ? setActiveTurn("circle") : setActiveTurn("cross");
    e.target.innerHTML = activeTurn;
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center ">
      <p className="text-white">{activeTurn}</p>
      <div className="  w-[390px] h-[390px] bg-stone-800 rounded-lg grid grid-cols-3">
        {Array(9)
          .fill("")
          .map((e, i) => {
            return (
              <a ref={(e) => (cellRef.current[i] = e)} onClick={runTurn}>
                {i}
              </a>
            );
          })}
      </div>
    </div>
  );
};
