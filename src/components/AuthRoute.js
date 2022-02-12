import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import {
    Route
} from "react-router-dom";
import LoginPage from "./LoginPage";


const AuthRoute = ({path,children, ...props}) => {
  const { authState } = useOktaAuth();
  if(!authState || !authState.isAuthenticated ) {
      return  <Route path={path} {...props}>
        <LoginPage path={path}/>
      </Route>
  }
  return  <Route path={path} {...props}>
        {children}
      </Route>
};
export default AuthRoute;