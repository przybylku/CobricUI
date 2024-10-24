import type { Meta, StoryObj } from "@storybook/react/*";
import Select from "./Select";

const meta = {
  title: "UI/Select",
  component: Select,
  tags: ["UI", "Button", "autodocs"],
  parameters: { layout: "centered" },
} as Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Clean: Story = {
  args: { name: "standard" },
};

export const WithOptionsAndPlaceholder: Story = {
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    placeholder: "Select an option",
  },
};
