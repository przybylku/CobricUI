import type { Meta, StoryObj } from "@storybook/react/*";
import Button from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["UI", "Button", "autodocs"],
  parameters: { layout: "centered" },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
};
