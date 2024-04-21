import React from "react";
import { InputGroup, Center, InputLeftElement, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

function Searchbar() {
  return (
    <>
      <Center>
        <InputGroup borderRadius={5} size="md" width={"60%"} mt={10}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
          />
          <Input
            type="text"
            placeholder="Search..."
            border="1px solid #949494"
          />
        </InputGroup>
      </Center>
    </>
  );
}

export default Searchbar;
