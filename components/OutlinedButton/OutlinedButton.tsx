import { COLOR_CODE } from "@/enums";
import { Button } from "@mui/material";
import { memo } from "react";

// disabled使わないかも
type Props = {
  text: string;
  type?: keyof typeof COLOR_CODE;
  disabled?: boolean;
  onClick?: () => void;
};

const OutlinedButton = (props: Props) => {
  const { text, type = "default", disabled = false, onClick } = props;
  const color = COLOR_CODE[type];
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{ borderColor: color, color: color }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default memo(OutlinedButton);
