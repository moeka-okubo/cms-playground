import {
  Select,
  MenuItem,
  FormHelperText,
  Stack,
  SelectChangeEvent,
} from "@mui/material";
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";
import FormLabelComponent from "../FormLabelComponent/FormLabelComponent";

type Option = { value: string; label: string };
type Props<T extends FieldValues> = {
  control: Control<T>;
  fieldName: Path<T>;
  label: string;
  options: Option[];
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
    isRequired = false,
  } = props;

  function changeValue(
    e: SelectChangeEvent<PathValue<T, Path<T>>>,
    field: ControllerRenderProps<T, Path<T>>
  ) {
    field.onChange(e.target.value);
  }

  return (
    <Controller<T>
      name={fieldName}
      control={control}
      render={({ field }) => (
        <Stack direction="row" alignItems="center">
          <FormLabelComponent label={label} isRequired={isRequired} />
          <Stack flex={1}>
            <Select
              {...field}
              value={field.value}
              onChange={(e) => changeValue(e, field)}
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
              <FormHelperText error sx={{ margin: "3px 14px 0" }}>
                {error.message}
              </FormHelperText>
            )}
          </Stack>
        </Stack>
      )}
    />
  );
}

export default SelectComponent;
