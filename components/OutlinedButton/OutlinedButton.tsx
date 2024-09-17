import { Button } from "@mui/material";
import { memo } from "react";

// disabled使わないかも
type Props = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

const OutlinedButton = (props: Props) => {
  const { text, disabled = false, onClick } = props;
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{ borderColor: "#009A62", color: "#009A62" }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default memo(OutlinedButton);
