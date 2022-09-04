import { colors } from '../global/colors';
import CalculatorHeader from './CalculatorHeader';

export default {
  title: 'CalculatorHeader',
  component: CalculatorHeader,
};

const Template = (args) => <CalculatorHeader {...args} />;

export const ShopCategoryHeader = Template.bind({});

ShopCategoryHeader.args = {
  category: {
    name: 'Groceries',
    color: colors.cyan[500],
  },
};

export const FoodCategoryHeader = Template.bind({});

FoodCategoryHeader.args = {
  category: {
    name: 'Food',
    color: colors.pink[500],
  },
};
