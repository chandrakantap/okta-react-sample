import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Security,LoginCallback  } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import AuthRoute from "./components/AuthRoute";
import MainPage from "./pages/MainPage";
import LoginPage from "./components/LoginPage";
import config from './oktaConfig';
import './App.css';


const oktaAuth = new OktaAuth(config);

function App() {
  const restoreOriginalUri = () => {
    // Callback function to restore URI during login
  };
  return (
    <Router>
       <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Switch>
          <Route path="/home">
            <LoginCallback loadingElement={<MainPage />} />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <AuthRoute path="/"><MainPage /></AuthRoute>
        </Switch>
      </Security>
    </Router>
  );
}

export default App;
