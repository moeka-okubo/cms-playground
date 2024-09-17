import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RadioComponent from "./RadioComponent";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues, Control, FieldErrors } from "react-hook-form";

const meta: Meta<typeof RadioComponent> = {
  title: "Components/RadioComponent",
  component: RadioComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioComponent>;

const schema = z.object({ default: z.string() });

type FormData = z.infer<typeof schema>;

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
    defaultValues: { default: "0" } as any,
  });

  return children({ control, error: errors[fieldName] });
}

export const Default: Story = {
  render: (args) => (
    <FormWrapper<FormData> fieldName="default">
      {(formProps) => (
        <RadioComponent<FormData>
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
