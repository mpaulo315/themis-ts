import { Button, ButtonGroup } from "@chakra-ui/react";
import type React from "react";

type BaseOption = {
  value: string;
};

type IconOption = {
  icon: React.ReactNode;
};

type LabelOption = {
  label: string;
};

type Option = BaseOption & (IconOption | LabelOption);

type ToggleButtonProps = {
  value: string;
  setValue: (value: string) => void;
  options: Option[];
};

const ToggleButton = ({ value, setValue, options }: ToggleButtonProps) => {
  return (
    <ButtonGroup variant="surface" size="xs" attached>
      {options.map((o) => (
        <Button onClick={() => setValue(o.value)} variant={value === o.value ? "solid" : "outline"}>
          {"icon" in o ? o.icon : o.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ToggleButton
