import React from "react";
import { useLocation } from "react-router-dom";

function Results() {
  const { state } = useLocation();
  const renObjData = state.map(function (data, id) {
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

  console.log(state, "this is result");
  return <div>{renObjData}</div>;
}

export default Results;
