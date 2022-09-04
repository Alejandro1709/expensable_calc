import CalculatorFooter from './CalculatorFooter';

export default {
  title: 'CalculatorFooter',
  component: CalculatorFooter,
};

const Template = (args) => <CalculatorFooter {...args} />;

export const Default = Template.bind({});

Default.args = {
  date: 'Sunday September, 04, 2022',
};
