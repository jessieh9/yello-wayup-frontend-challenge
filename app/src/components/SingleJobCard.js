import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SingleJobCard() {
  let location = useLocation();
  let path = location.pathname.split("/");
  let id = path[path.length-1]; 

  const [singleJob, setSingleJob] = useState([]);

  useEffect(() => {
    axios
      .get(`https://62bc8d086b1401736cfcd8fb.mockapi.io/jobs/${id}`)
      .then((response) => {
        setSingleJob(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  console.log(singleJob);

  return <div> Single Job Card</div>;
}

export default SingleJobCard;
