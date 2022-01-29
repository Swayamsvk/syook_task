import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";

function DishSelection(props) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const { position, dataValue } = rank;
  // console.log(position, "position");
  //console.log(dataValue, "datavalue");
  console.log(data);
  const btnstyle = {
    width: "170px",
    height: "60px",
    marginTop: "2%",
    marginBottom: "2%",
    fontWeight: "bold",
    fontSize: 40,
  };
  const maintextstyle = {
    fontSize: 50,
    color: "#0047AB",
  };

  useEffect(() => {
    axios
      .get(
        " https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((response) => {
        //console.log(response.data, "this is response");
        setData(response.data);
      });
    setData(
      data.map((d) => {
        return {
          rank: 0,
          id: d.id,
          username: d.username,
          password: d.password,
        };
      })
    );
  }, []);
  const handleClick = (data) => {
    console.log(data, "next data");
    navigate("/results", { state: data });
  };

  const renObjData = data.map(function (curData, id) {
    return (
      <div key={id}>
        <div style={maintextstyle}>{curData.dishName}</div>
        <div style={{ marginTop: "1%", marginBottom: "1%" }}>
          <TextField
            placeholder="Please Provide a Rank"
            className="field"
            type="text"
            value={data.rank}
            onChange={(e) => {
              let curValue = e.target.value;
              // setRank({
              //   position: e.target.value,
              //   dataValue: curData.dishName,
              // });

              //   {
              //   position: curValue,
              //   dataValue: data.dishName,
              // }
              setData(
                data.map((newData) => {
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

  return (
    <div>
      <div
        style={{ marginTop: "-10px", marginLeft: "-10%", marginRight: "-10%" }}
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
              Dish Selection
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ marginLeft: "5%", marginTop: "5%" }}>
        {renObjData}
        {/* <button onClick={() => handleClick(data)}>Submit</button> */}
        <Button
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={() => handleClick(data)}
          fullWidth
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default DishSelection;
