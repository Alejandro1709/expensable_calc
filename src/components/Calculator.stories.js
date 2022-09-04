import Calculator from './Calculator';

export default {
  title: 'Calculator',
  component: Calculator,
};

const Template = (args) => <Calculator {...args} />;

export const Default = Template.bind({});

Default.args = {
  category: {
    name: 'Groceries',
    color: '#2BCDC1',
  },
  prevNumber: 'null',
  operant: 'null',
  currentNumber: '0',
  isOperationReady: false,
};
