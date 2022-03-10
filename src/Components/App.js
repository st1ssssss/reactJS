import { Switch, Route } from 'react-router-dom'
import Form from "./Form";
import Profile from './Prifile'
import Home from './Home'



function App() {

  return (
    <Switch>
      <Route exact path={'/chats'} component={Form} />
      <Route exact path={'/chats/:chatId'} component={Form} />
      <Route path={'/profile'} component={Profile} />
      <Route exact path={'/'} component={Home} />
    </Switch>

  );
}

export default App;
