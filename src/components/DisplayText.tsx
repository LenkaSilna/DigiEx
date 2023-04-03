import React from "react";
import { Box } from '@chakra-ui/react';

interface Props {
  fileContents: string;
}

const DisplayText: React.FC<Props> = ({ fileContents }) => {
    return <Box h="inherit" p={"4"} overflow="auto" >
        {fileContents && (
    <div>
        <p>File contents: {fileContents}</p>
    </div>
)}</Box>;
};

export default DisplayText;
