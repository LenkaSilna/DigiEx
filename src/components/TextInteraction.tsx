import React, { useState, ChangeEvent} from "react";
import { Textarea, Stack, Flex, Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';

interface Props {
  onTextChange: (text: string) => void;
  };

  type IconProps = {
    color?: string;
  };

const TextInteraction: React.FC<Props> = ({ onTextChange }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    setMessages([...messages, message]);
    setMessage("");
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setMessage(newText);
    onTextChange(newText);
  };

  const handleClearClick = () => {
    setMessage("");
    onTextChange("");
  };

  const handleSave = () => {
    // Save messages to database or local storage
    setMessages([])
  };

  return (
    <div>
    <Flex direction="column">
    <Textarea 
    value={messages
        .map((message) => `📩 ${message}\n`)
        .join("")}
        readOnly
        placeholder='Here is a sample placeholder'
        onChange={handleTextChange}
        bg='grey.100'
        height="50vh"
        color={"blackAlpha.900"} />
        <Input mt={5} placeholder="Napište zprávu" value={message} onChange={handleMessageChange} />
    <Stack mt={5} spacing={4} direction='row' align='center'>
    <Button size='md' onClick={handleSend}>
        Send
    </Button>
    <Button size='md' onClick={handleClearClick} >Clear</Button>
    <Button size='md' onClick={handleSave} disabled={messages.length === 0}>
        Reset All
    </Button>
    </Stack>

    </Flex>
    </div>
  );
};

export default TextInteraction;
