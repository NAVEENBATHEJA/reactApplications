
import './App.css';
import ClassCounter from './components/ClassCounter';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <HookCounterThree />
      <HookCounterFour />
      <HookCounterOne />
      <MouseContainer /> */}
      <DataFetching/>
    </div>
  );
}

export default App;
