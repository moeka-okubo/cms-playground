import {
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { z } from "zod";
import FormLabelComponent from "../FormLabelComponent/FormLabelComponent";

type Props<T extends FieldValues> = {
  control: Control<T>;
  fieldName: Path<T>;
  label: string;
  options: { value: string; label: string }[];
  error?: FieldError;
  defaultIndex?: number;
  isRequired?: boolean;
};

function RadioComponent<T extends FieldValues>(props: Props<T>) {
  const {
    control,
    error,
    fieldName,
    label,
    options,
    defaultIndex,
    isRequired = false,
  } = props;

  const RadioSchema = z.enum(
    options.map((option) => option.value) as [string, ...string[]]
  );
  type RadioValue = z.infer<typeof RadioSchema>;

  const getDefaultValue = (): RadioValue | undefined => {
    if (
      typeof defaultIndex === "number" &&
      defaultIndex >= 0 &&
      defaultIndex < options.length
    ) {
      return options[defaultIndex].value as RadioValue;
    }
    return undefined;
  };

  return (
    <Controller<T>
      name={fieldName}
      control={control}
      render={({ field }) => (
        <>
          <Stack direction="row" alignItems="center">
            <FormLabelComponent label={label} isRequired={isRequired} />
            <RadioGroup
              {...field}
              value={field.value ?? getDefaultValue()}
              onChange={(e) => field.onChange(e.target.value as RadioValue)}
              row
            >
              {options.map(({ value, label }, index) => (
                <FormControlLabel
                  key={index}
                  value={value}
                  control={<Radio />}
                  label={label}
                />
              ))}
            </RadioGroup>
          </Stack>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </>
      )}
    />
  );
}

export default RadioComponent;
