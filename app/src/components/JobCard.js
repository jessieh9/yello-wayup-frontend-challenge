import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Tag,
  UnorderedList,
  ListItem,
  background,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

function JobCard({ company, description, id, location, tags, title }) {
  const navigate = useNavigate();

  return (
    <>
      <Card
        maxW="sm"
        border={"solid #4ec6d2"}
        _hover={{
          backgroundColor: "#f4f6fc",
        }}
        onClick={() => navigate(`/jobs/${id}`, { jobId: id })}
      >
        <CardBody>
          <Stack mt="6">
            <Tag
              width={"fit-content"}
              color={"#Ad2253"}
              fontWeight={800}
              fontSize={"0.8rem"}
              colorScheme="red"
            >
              Currently hiring
            </Tag>
            <Heading size="md">{title}</Heading>
            <Text >{company}</Text>
            <Stack direction={"row"}>
              <FaLocationDot />
              <Text>{location}</Text>
            </Stack>
            <UnorderedList>
              <ListItem>{description}</ListItem>
            </UnorderedList>
          </Stack>
        </CardBody>
        <CardFooter>
          {tags.length !== 0 ? (
            tags.map((tag) => (
              <Tag key={tag} mr={3}>
                {tag}
              </Tag>
            ))
          ) : (
            <Tag>N/A</Tag>
          )}
        </CardFooter>
      </Card>
    </>
  );
}

export default JobCard;
