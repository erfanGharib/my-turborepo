import type { Meta, StoryObj } from '@storybook/react-native';
import { ActionButton } from './Actions';
import { fn } from 'storybook/test';
import {MobileButton} from "@repo/mobile-ui/mobile-button"
const meta = {
  component: MobileButton,
  parameters: {
    notes: `
# Button

This is a button component.
You use it like this:

\`\`\`tsx    
<Button 
      text="Press me!" 
      onPress={() => console.log('pressed')} 
/>
\`\`\`
`,
  },
} satisfies Meta<typeof ActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Press me!',
  },
};
