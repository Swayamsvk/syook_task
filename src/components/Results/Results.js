import { AppBar, TextField, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";

function Results() {
  const { state } = useLocation();
  const [prevData, setPrevData] = useState(state);
  const maintextstyle = {
    fontSize: 30,
    color: "#0047AB",
    fontWeight: "bold",
  };
  const secondarytextstyle = {
    fontSize: 30,
    color: "#0047AB",
  };
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
      return (
        <h1 key={id} style={{ color: "#00008B" }}>
          {data.dishName} with Rank 1 gets 30 points
        </h1>
      );
    }
    if (data.rank == 2) {
      return (
        <h1 key={id} style={{ color: "#00008B" }}>
          {data.dishName} with Rank 2 gets 20 points
        </h1>
      );
    }
    if (data.rank == 3) {
      return (
        <h1 key={id} style={{ color: "#00008B" }}>
          {data.dishName} with Rank 3 gets 10 points
        </h1>
      );
    }
    // return <p key={id}>{data}</p>;
  });
  const renObjData = prevData.map(function (curData, id) {
    //console.log(curData, "curData is this");
    return (
      <div key={id} style={{ marginTop: "2%" }}>
        <div style={maintextstyle}> {curData.dishName}</div>
        <div style={secondarytextstyle}>{curData.description}</div>
        <div style={{ marginTop: "1%", marginBottom: "3%" }}>
          <TextField
            placeholder="Change the Rank if you want to"
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
          />
        </div>
      </div>
    );
  });

  //console.log(state, "this is result");
  return (
    <div>
      <div
        style={{ marginTop: "-10px", marginLeft: "-8px", marginRight: "-8px" }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h3"
              component="div"
              align="center"
              sx={{ flexGrow: 1 }}
              style={{ fontWeight: "bold" }}
            >
              Result
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ marginLeft: "1%", marginTop: "1%", marginRight: "25%" }}>
        {showRank}
        <br />
        <Divider />
        {renObjData}
      </div>
    </div>
  );
}

export default Results;
