import logo from './logo.svg';
import './App.css';
import Message from './Message'

const textForMessage = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda in ut necessitatibus facilis doloribus accusamus.'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={textForMessage} />
      </header>
    </div>
  );
}

export default App;
