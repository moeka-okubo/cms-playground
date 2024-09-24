import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RadioComponent from "./RadioComponent";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Control, FieldErrors } from "react-hook-form";

const meta: Meta<typeof RadioComponent> = {
  title: "Components/RadioComponent",
  component: RadioComponent,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

const schema = z.object({ default: z.string() });
const options = [
  { value: "1", label: "はい" },
  { value: "0", label: "いいえ" },
];

type Story = StoryObj<typeof RadioComponent>;
type FormData = z.infer<typeof schema>;

type FormWrapperProps = {
  children: (props: {
    control: Control<FormData>;
    error: FieldErrors<FormData>["default"];
  }) => React.ReactElement;
};

function FormWrapper({ children }: FormWrapperProps) {
  const {
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { default: "0" },
  });

  return children({ control, error: errors.default });
}

export const Default: Story = {
  render: (args) => (
    <FormWrapper>
      {({ control, error }) => (
        <RadioComponent<FormData>
          {...args}
          control={control}
          error={error}
          fieldName="default"
        />
      )}
    </FormWrapper>
  ),
  args: { label: "デフォルト", options: options },
};
