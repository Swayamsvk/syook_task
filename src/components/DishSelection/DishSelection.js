import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DishSelection(props) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const { position, dataValue } = rank;
  // console.log(position, "position");
  //console.log(dataValue, "datavalue");
  console.log(data);

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
      <p key={id}>
        {curData.dishName}
        <input
          placeholder="Rank"
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
          required
        />
      </p>
    );
  });

  return (
    <div>
      {renObjData}
      <button onClick={() => handleClick(data)}>Submit</button>
    </div>
  );
}

export default DishSelection;
