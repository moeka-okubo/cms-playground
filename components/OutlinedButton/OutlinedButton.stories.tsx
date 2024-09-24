import { Meta, StoryObj } from "@storybook/react";
import OutlinedButton from "./OutlinedButton";

const meta: Meta<typeof OutlinedButton> = {
  title: "Components/OutlinedButton",
  component: OutlinedButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OutlinedButton>;

export const Default: Story = { args: { text: "ボタン" } };
export const Error: Story = { args: { text: "エラー", type: "error" } };
export const Disabled: Story = { args: { text: "ボタン", disabled: true } };
