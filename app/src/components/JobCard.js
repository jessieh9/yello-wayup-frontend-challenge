import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Tag,
  UnorderedList,
  ListItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { FaLocationDot, FaEllipsis } from "react-icons/fa6";

function JobCard({ company, description, id, location, tags, title }) {
  const navigate = useNavigate();

  return (
    <>
      <Popover>
        <Card
          maxW="sm"
          border={"solid #4ec6d2"}
          _hover={{
            backgroundColor: "#f4f6fc",
          }}
          onClick={() => navigate(`/jobs/${id}`, { jobId: id })}
        >
          <PopoverTrigger>
            <Button
              ml={"auto"}
              mr={5}
              mt={2}
              mb={0}
              padding={0}
              backgroundColor={"transparent"}
              _hover={{ backgroundColor: "none" }}
            >
              <FaEllipsis size={"20px"} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton />
            <PopoverBody>Extra information on this job ...</PopoverBody>
          </PopoverContent>
          <CardBody>
            <Stack>
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
              <Text>{company}</Text>
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
      </Popover>
    </>
  );
}

export default JobCard;
