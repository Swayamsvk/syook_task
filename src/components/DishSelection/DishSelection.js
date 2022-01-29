import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";

function DishSelection(props) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const btnstyle = {
    width: "170px",
    height: "60px",
    marginTop: "2%",
    marginBottom: "2%",
    fontWeight: "bold",
    fontSize: 40,
  };
  const maintextstyle = {
    fontSize: 30,
    color: "#0047AB",
    fontWeight: "bold",
  };
  const maincontentstyle = {
    marginLeft: "1%",
    marginTop: "1%",
    marginRight: "25%",
  };
  const secondarytextstyle = {
    fontSize: 30,
    color: "#0047AB",
  };
  const appbarstyle = {
    marginTop: "-10px",
    marginLeft: "-8px",
    marginRight: "-8px",
  };

  useEffect(() => {
    axios
      .get(
        " https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
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
    navigate("/results", { state: data });
  };

  const renObjData = data.map(function (curData, id) {
    return (
      <div key={id}>
        <div style={maintextstyle}>{curData.dishName}</div>
        <div style={secondarytextstyle}>{curData.description}</div>
        {/* <img src={curData.image} alt="Dish Image" /> */}
        <div style={{ marginTop: "1%", marginBottom: "3%" }}>
          <TextField
            placeholder="Please Provide a Rank"
            className="field"
            type="text"
            value={data.rank}
            onChange={(e) => {
              let curValue = e.target.value;
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
      <div style={appbarstyle}>
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
      <div style={maincontentstyle}>
        {renObjData}
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
