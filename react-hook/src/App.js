
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookCounterThree />
      <HookCounterFour/>
    </div>
  );
}

export default App;
