import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import styles from './LoginPage.module.css';

const LoginPage = ({path}) => {
    const { authState, oktaAuth } = useOktaAuth();
    const login = () => {
        oktaAuth.signInWithRedirect({originalUri: path});
    }

    if( !authState ) {
        return (
            <div  className={styles.loginPage}>Loading authentication...</div>
        );
    }
    
    return (
        <div className={styles.loginPage}>
            <h1 className={styles.pageTitle}>Welcome to Okta sample app</h1>
            <button onClick={login}>Login</button>
        </div>
    )
};

export default LoginPage;