import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Stack,
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

function SelectComponent<T extends FieldValues>(props: Props<T>) {
  const {
    control,
    error,
    fieldName,
    label,
    options,
    defaultIndex,
    isRequired = false,
  } = props;

  const SelectSchema = z.enum(
    options.map((option) => option.value) as [string, ...string[]]
  );
  type SelectValue = z.infer<typeof SelectSchema>;

  const getDefaultValue = (): SelectValue | undefined => {
    if (
      typeof defaultIndex === "number" &&
      defaultIndex >= 0 &&
      defaultIndex < options.length
    ) {
      return options[defaultIndex].value as SelectValue;
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
            <Stack flex={1}>
              <Select
                {...field}
                value={field.value ?? getDefaultValue() ?? ""}
                onChange={(e) => field.onChange(e.target.value as SelectValue)}
                sx={{ minWidth: 200, width: "70%" }}
                error={!!error}
              >
                {options.map(({ value, label }, index) => (
                  <MenuItem key={index} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
              {error && (
                <FormHelperText sx={{ color: "#d32f2f", margin: "3px 14px 0" }}>
                  {error.message}
                </FormHelperText>
              )}
            </Stack>
          </Stack>
        </>
      )}
    />
  );
}

export default SelectComponent;
