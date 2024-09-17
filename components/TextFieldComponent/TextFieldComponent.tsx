import { Stack, FormLabel, TextField } from "@mui/material";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import FormLabelComponent from "../FormLabelComponent/FormLabelComponent";

type Props<T extends FieldValues> = {
  control: Control<T>;
  fieldName: Path<T>;
  label: string;
  error?: FieldError;
  isRequired?: boolean;
};

const getErrorMessage = (error: FieldError | undefined): string => {
  if (error && "message" in error && typeof error.message === "string") {
    return error.message;
  }
  return "";
};

function TextFieldComponent<T extends FieldValues>(props: Props<T>) {
  const { control, error, fieldName, label, isRequired = false } = props;
  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field }) => (
        <Stack direction="row" alignItems="center">
          <FormLabelComponent label={label} isRequired={isRequired} />
          <TextField
            {...field}
            margin="normal"
            required
            fullWidth
            id={fieldName}
            error={!!error}
            helperText={getErrorMessage(error)}
          />
        </Stack>
      )}
    />
  );
}

export default TextFieldComponent;
