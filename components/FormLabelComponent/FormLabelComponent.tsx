import { FormLabel } from "@mui/material";

type Props = {
  label: string;
  isRequired?: boolean;
};

const FormLabelComponent = (props: Props) => {
  const { label, isRequired = false } = props;
  return (
    <FormLabel sx={{ minWidth: "fit-content", marginRight: 2 }}>
      {isRequired && (
        <span
          style={{
            backgroundColor: "#EC6C1F",
            color: "#f0f9f1",
            padding: 4,
            marginRight: 8,
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          必須
        </span>
      )}
      {label}
    </FormLabel>
  );
};

export default FormLabelComponent;
