import './App.css';
import Calculator from './components/Calculator';
import { colors } from './global/colors';

const category = {
  name: 'Food',
  color: colors.cyan[500],
  icon: '🍔',
};

function App() {
  return (
    <div className='App'>
      <Calculator category={category} />
    </div>
  );
}

export default App;
