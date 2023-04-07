import './App.css';
import Changecolor from './features/theme/Changecolor';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter /><Changecolor />
    </div>
  );
}

export default App;
