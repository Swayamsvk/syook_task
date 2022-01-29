import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Results() {
  const { state } = useLocation();
  const [prevData, setPrevData] = useState(state);
  useEffect(() => {
    //console.log(prevData, "this is prevdata");
    // setPrevData(
    //   prevData.map((d) => {
    //     return {
    //       rank: d.rank,
    //       id: d.id,
    //       username: d.username,
    //       password: d.password,
    //     };
    //   })
    // );
  }, []);
  //console.log(prevData, "this is prevdata");

  const showRank = state.map(function (data, id) {
    if (data.rank == 1) {
      return <p key={id}>{data.dishName} with Rank 1</p>;
    }
    if (data.rank == 2) {
      return <p key={id}>{data.dishName} with Rank 2</p>;
    }
    if (data.rank == 3) {
      return <p key={id}>{data.dishName} with Rank 3</p>;
    }
    // return <p key={id}>{data}</p>;
  });
  const renObjData = prevData.map(function (curData, id) {
    //console.log(curData, "curData is this");
    return (
      <p key={id}>
        {curData.dishName}
        <input
          placeholder="Rank"
          className="field"
          type="text"
          value={curData.rank}
          onChange={(e) => {
            let curValue = e.target.value;
            setPrevData(
              prevData.map((newData) => {
                if (curData.id == newData.id) {
                  newData.rank = curValue;
                }
                return newData;
              })
            );
          }}
          required
        />
      </p>
    );
  });

  //console.log(state, "this is result");
  return (
    <div>
      {showRank}
      <br />
      {renObjData}
    </div>
  );
}

export default Results;
