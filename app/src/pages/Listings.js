import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Center, Grid, GridItem, Stack } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import SingleJobCard from "../components/SingleJobCard";
import Searchbar from "../components/Searchbar";

function Listings() {
  let location = useLocation();
  let path = location.pathname.split("/");
  let id = path[path.length - 1];

  const [singleJob, setSingleJob] = useState([]);
  const [jobs, setJobs] = useState([]);

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

  useEffect(() => {
    axios
      .get("https://62bc8d086b1401736cfcd8fb.mockapi.io/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(singleJob);

  return (
    <>
      <Navbar />
      <Searchbar />
      <Center>
        <Grid mt={"10"} templateColumns="repeat(2, 1fr)" gap={10}>
          <Stack overflowY={"auto"} maxHeight={"100vh"}>
            {jobs.map((job) => (
              <GridItem key={job.id}>
                <JobCard
                  company={job.company}
                  description={job.description}
                  id={job.id}
                  location={job.location}
                  tags={job.tags}
                  title={job.title}
                />
              </GridItem>
            ))}
          </Stack>
          <GridItem>
            <Grid templateColumns="repeat(1, 1fr)" gap={6}>
              <Stack>
                <GridItem w="100%" h="10">
                  <SingleJobCard
                    company={singleJob.company}
                    description={singleJob.description}
                    id={singleJob.id}
                    location={singleJob.location}
                    tags={singleJob.tags}
                    title={singleJob.title}
                  />
                </GridItem>
              </Stack>
            </Grid>
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}

export default Listings;
