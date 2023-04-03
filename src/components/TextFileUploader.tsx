import React, { ChangeEvent, useState } from "react";
import { Flex } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react'

interface Props {
  onFileUpload: (fileContents: string) => void;
}

const TextFileUploader: React.FC<Props> = ({ onFileUpload }) => {
  const [fileContents, setFileContents] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target?.result as string;
        setFileContents(contents);
        setFileName(file.name);
        onFileUpload(contents);
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    setFileContents("");
    setFileName("");
    onFileUpload("");
    location.reload()
  }

  return (
    <div>
      <Flex direction="row">
      <input className="input" type="file" accept=".txt" onChange={handleFileChange} /><CloseButton onClick={handleReset} />
      </Flex>
    </div>
  );
};

export default TextFileUploader;
