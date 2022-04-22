import { Switch, Route } from 'react-router-dom'
import { FormContainer } from "./FormContainer";
import Profile from './Prifile'
import Home from './Home'
import { Gists } from './Gists'


function App() {

  return (
    <Switch>
      <Route exact path={'/chats'} component={FormContainer} />
      <Route exact path={'/chats/:chatId'} component={FormContainer} />
      <Route path={'/profile'} component={Profile} />
      <Route path={'/gists'} component={Gists} />
      <Route exact path={'/'} component={Home} />
    </Switch>

  );
}

export default App;
