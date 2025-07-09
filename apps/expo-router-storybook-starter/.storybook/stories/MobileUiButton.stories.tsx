import { View } from "react-native";
// import { MyButton, MyButtonProps } from "../../src/components/Button";
import { MobileButton } from '@repo/mobile-ui/mobile-button';
import { Meta, StoryObj } from "@storybook/react-native";

const meta: Meta = {
  title: "Button",
  component: MobileButton,
  argTypes: {
    onPress: {
      action: "onPress event",
    },
  },

  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {
  storyName: "Basic",
  args: {
    disabled: false,
    text: "sldkfjlsdkjflksdj",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: "sldkjflskdjflksdjf",
  },
};
