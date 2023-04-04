import React, { ChangeEvent, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import Subtitle from "subtitle";
import { parse } from 'subtitle';

interface Props {
  onFileUpload: (fileContents: string ) => void;
}

const TextFileUploader: React.FC<Props> = ({ onFileUpload }) => {
  const [fileContents, setFileContents] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    console.log(file?.type);
    if (file && (file.type === "text/plain" || file.type === "application/x-subrip")) {
      if (file.type === "application/x-subrip") {
        const reader = new FileReader();
        reader.onload = (e) => {
          const contents = e.target?.result as string;
          const parsedContents = contents.toString();
          setFileContents(contents);
          setFileName(file.name);
          onFileUpload(parsedContents);
        };
        reader.readAsText(file);
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          const contents = e.target?.result as string;
          setFileContents(contents);
          setFileName(file.name);
          onFileUpload(contents);
        };
        reader.readAsText(file);
      }
    }
  };

  const handleReset = () => {
    setFileContents("");
    setFileName("");
    onFileUpload("");
    location.reload();
  };

  return (
      <Flex direction="row">
        <input className="input" type="file" onChange={handleFileChange} />
        <CloseButton onClick={handleReset} />
      </Flex>
  );
};

export default TextFileUploader;
