import * as React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Tag,
  // ButtonGroup,
  // Button,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

function JobCard({ company, description, id, location, tags, title }) {
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6">
            <Heading size="md">{title}</Heading>
            <Text>{company}</Text>
            <Stack direction={"row"}>
              <FaLocationDot />
              <Text>{location}</Text>
            </Stack>

            <Text>{description}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          {tags.map((tag) => (
            <Tag key={tag} mr={3}>
              {tag}
            </Tag>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}

export default JobCard;
