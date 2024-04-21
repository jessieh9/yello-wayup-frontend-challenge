import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridItem, Center } from "@chakra-ui/react";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

function Landing() {
  const [jobs, setJobs] = useState([]);

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
  console.log(jobs);

  return (
    <>
      <Navbar />
      <Center>
        <Grid mt={"10"} templateColumns="repeat(3, 1fr)" gap={6}>
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
        </Grid>
      </Center>
    </>
  );
}

export default Landing;
