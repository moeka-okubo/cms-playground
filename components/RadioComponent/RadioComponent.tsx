import React, { ChangeEvent } from "react";
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
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { z } from "zod";
import FormLabelComponent from "../FormLabelComponent/FormLabelComponent";

type Option = {
  value: string;
  label: string;
};

type Props<T extends FieldValues> = {
  control: Control<T>;
  fieldName: Path<T>;
  label: string;
  options: Option[];
  error?: FieldError;
  isRequired?: boolean;
};

function RadioComponent<T extends FieldValues>({
  control,
  error,
  fieldName,
  label,
  options,
  isRequired = false,
}: Props<T>) {
  const RadioSchema = z.enum(
    options.map((option) => option.value) as [string, ...string[]]
  );

  function changeValue(
    e: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<T, Path<T>>
  ) {
    const value = e.target.value;
    if (RadioSchema.safeParse(value).success) {
      field.onChange(value);
    }
  }

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
              value={field.value}
              onChange={(e) => changeValue(e, field)}
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
          {error && <FormHelperText error>{error.message}</FormHelperText>}
        </>
      )}
    />
  );
}

export default RadioComponent;
