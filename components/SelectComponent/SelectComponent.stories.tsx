import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SelectComponent from "./SelectComponent";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  Control,
  FieldErrors,
  UseFormProps,
  FieldPath,
  DefaultValues,
} from "react-hook-form";

const schema = z.object({ default: z.string() });

type FormData = z.infer<typeof schema>;

type FormWrapperProps<T extends { default: string }> = {
  children: (props: {
    control: Control<T>;
    error: FieldErrors<T>[FieldPath<T>];
  }) => React.ReactElement;
  fieldName: FieldPath<T>;
};

function FormWrapper<T extends { default: string }>({
  children,
  fieldName,
}: FormWrapperProps<T>) {
  const defaultValues: DefaultValues<T> = {
    default: "0",
  } as DefaultValues<T>;

  const formOptions: UseFormProps<T> = {
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues,
  };

  const {
    control,
    formState: { errors },
  } = useForm<T>(formOptions);

  return children({ control, error: errors[fieldName] });
}

const meta: Meta<typeof SelectComponent> = {
  title: "Components/SelectComponent",
  component: SelectComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SelectComponent>;

export const Default: Story = {
  render: (args) => (
    <FormWrapper<FormData> fieldName="default">
      {(formProps) => (
        <SelectComponent<FormData>
          {...args}
          {...formProps}
          fieldName="default"
        />
      )}
    </FormWrapper>
  ),
  args: {
    label: "デフォルト",
    options: [
      { value: "1", label: "はい" },
      { value: "0", label: "いいえ" },
    ],
  },
};
