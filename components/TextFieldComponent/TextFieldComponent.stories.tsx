import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextFieldComponent from "./TextFieldComponent";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  FieldValues,
  Control,
  FieldErrors,
  DefaultValues,
} from "react-hook-form";

const meta: Meta<typeof TextFieldComponent> = {
  title: "Components/TextFieldComponent",
  component: TextFieldComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextFieldComponent>;

const schema = z.object({
  default: z.string(),
  required: z.string().min(1, "この項目は必須項目です"),
  minLength: z.union([
    z.string().min(5, "5文字以上で入力してください"),
    z.string().max(0),
  ]),
  number: z.union([
    z.string().regex(/^[0-9-]+$/, "半角数字とハイフンのみ使用可能です"),
    z.string().max(0),
  ]),
});

type FormData = z.infer<typeof schema>;

const defaultValues: FormData = {
  default: "",
  required: "",
  minLength: "テストてすと",
  number: "",
};

function FormWrapper<T extends FieldValues>({
  children,
  fieldName,
}: {
  children: (props: {
    control: Control<T>;
    error: FieldErrors<T>[keyof T];
  }) => React.ReactElement;
  fieldName: keyof T;
}) {
  const {
    control,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: defaultValues as unknown as DefaultValues<T>,
  });

  return children({ control, error: errors[fieldName] });
}

export const Default: Story = {
  render: (args) => (
    <FormWrapper<FormData> fieldName="default">
      {(formProps) => (
        <TextFieldComponent<FormData>
          {...args}
          {...formProps}
          fieldName="default"
        />
      )}
    </FormWrapper>
  ),
  args: {
    label: "デフォルト",
  },
};

export const Required: Story = {
  render: (args) => (
    <FormWrapper<FormData> fieldName="required">
      {(formProps) => (
        <TextFieldComponent<FormData>
          {...args}
          {...formProps}
          fieldName="required"
        />
      )}
    </FormWrapper>
  ),
  args: {
    label: "必須項目",
    isRequired: true,
  },
};

export const MinLength: Story = {
  render: (args) => (
    <FormWrapper<FormData> fieldName="minLength">
      {(formProps) => (
        <TextFieldComponent<FormData>
          {...args}
          {...formProps}
          fieldName="minLength"
        />
      )}
    </FormWrapper>
  ),
  args: {
    label: "最低文字数あり",
  },
};

export const Number: Story = {
  render: (args) => (
    <FormWrapper<FormData> fieldName="number">
      {(formProps) => (
        <TextFieldComponent<FormData>
          {...args}
          {...formProps}
          fieldName="number"
        />
      )}
    </FormWrapper>
  ),
  args: {
    label: "半角数字のみ",
  },
};
