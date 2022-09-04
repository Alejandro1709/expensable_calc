import Pad from './Pad';

export default {
  title: 'Pad',
  component: Pad,
};

const Template = (args) => <Pad {...args} />;

export const DefaultPad = Template.bind({});

DefaultPad.args = {
  value: '1',
  isOperant: false,
};

export const ExecPad = Template.bind({});

ExecPad.args = {
  value: '1',
  isOperant: false,
};
