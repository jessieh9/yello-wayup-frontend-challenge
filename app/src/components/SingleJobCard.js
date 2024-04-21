import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Heading,
  Stack,
  Text,
  Button,
  ButtonGroup,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

function SingleJobCard({ company, description, id, location, tags, title }) {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://www.californiaemploymentlawreport.com/wp-content/uploads/sites/747/2023/01/Now-Hiring.png"
            alt="Hiring job with resume and files documents"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
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
        <Divider opacity={0.5} />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Apply
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default SingleJobCard;
