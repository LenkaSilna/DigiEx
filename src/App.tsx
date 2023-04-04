import React, { useState } from "react";
import TextFileUploader from "./components/TextFileUploader";
import DisplayText from "./components/DisplayText";
import TextInteraction from "./components/TextInteraction";
import logo from "./assets/logo.svg";
import { Box, Flex, Spacer, ButtonGroup } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import SwitchTheme from "./components/SwitchTheme";

const App: React.FC = () => {
  const [fileContents, setFileContents] = useState<string>("");

  const handleFileUpload = (contents: string) => {
    setFileContents(contents);
  };

  return (
    <>
    <Flex width="100%" p={4} alignItems='center' gap='2'>
        <Box p='2'>
        <img src={logo} alt="logo" width={"50px"} height={"50px"} />
        </Box>
      <Spacer />
      <Box p='2'>
        <SwitchTheme />
        </Box>
        <Spacer />
        <Box>
          <TextFileUploader onFileUpload={handleFileUpload} />
        </Box>
    </Flex>
    <Grid width="100%" p={4} templateColumns="repeat(2, 1fr)"
      gap={6}
      height="50vw"
      >
      <GridItem w='100%' h='100%' overflow={"hidden"}>
      {fileContents && <DisplayText fileContents={fileContents} />}
      </GridItem>
      <GridItem w='100%' h='100%'>
      <TextInteraction onTextChange={function (text: string): void {
            throw new Error("Function not implemented.");
          } } />
      </GridItem>
    </Grid>
      </>

  );
};

export default App;

