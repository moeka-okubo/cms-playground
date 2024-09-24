import { Meta, StoryObj } from "@storybook/react";
import ImageUpload from "./ImageUpload";

const meta: Meta<typeof ImageUpload> = {
  title: "Components/ImageUpload",
  component: ImageUpload,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ImageUpload>;

export const Default: Story = {
  args: { altText: "写真", buttonText: "写真を追加する" },
};
