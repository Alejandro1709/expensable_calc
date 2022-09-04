import CalculatorDisplay from './CalculatorDisplay';

export default {
  title: 'CalculatorDisplay',
  component: CalculatorDisplay,
};

const Template = (args) => <CalculatorDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentNumber: '0',
  prevNumber: 'null',
  operant: 'null',
};
