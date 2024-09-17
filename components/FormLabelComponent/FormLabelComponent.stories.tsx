import { Meta, StoryObj } from "@storybook/react";
import FormLabelComponent from "./FormLabelComponent";

const meta: Meta<typeof FormLabelComponent> = {
  title: "Components/FormLabelComponent",
  component: FormLabelComponent,
};

export default meta;

type Story = StoryObj<typeof FormLabelComponent>;

export const Required: Story = {
  args: { label: "必須の場合", isRequired: true },
};

export const Optional: Story = {
  args: { label: "任意の場合", isRequired: false },
};
