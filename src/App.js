import './App.css';
import HelloWorld from './components/HelloWorld';
import HelloRuben from './components/HelloRuben';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloRuben name="Ruben" />
      <Message />
    </div>
  );
}

export default App;
