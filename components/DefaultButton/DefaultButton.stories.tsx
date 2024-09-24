import { Meta, StoryObj } from "@storybook/react";
import DefaultButton from "./DefaultButton";

const meta: Meta<typeof DefaultButton> = {
  title: "Components/DefaultButton",
  component: DefaultButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DefaultButton>;

export const Default: Story = { args: { text: "ボタン" } };
export const Disabled: Story = { args: { text: "ボタン", disabled: true } };
