import { Switch, useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ColorMode } from "@chakra-ui/react";
import theme from "../theme";

function SwitchTheme() {
  const [isChecked, setIsChecked] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    setIsChecked(colorMode === "dark");
  }, [colorMode]);

  function handleSwitch() {
    setIsChecked(!isChecked);
    toggleColorMode();
  }

  return (
    <Switch size='lg' colorScheme='gray' isChecked={isChecked} onChange={handleSwitch}>
      {isChecked ? "Dark" : "Light"}
    </Switch>
  );
}

export default SwitchTheme;
