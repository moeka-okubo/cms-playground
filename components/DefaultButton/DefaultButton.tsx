import { Button } from "@mui/material";
import { memo } from "react";

type Props = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

const DefaultButton = (props: Props) => {
  const { text, disabled = false, onClick } = props;
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ backgroundColor: "#009A62" }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default memo(DefaultButton);
