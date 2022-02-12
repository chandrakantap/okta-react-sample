import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import ApiCallTest from '../components/ApiCallTest';
import styles from './MainPage.module.css';

const MainPage = () => {
    const { authState,oktaAuth } = useOktaAuth();
    const history = useHistory(); 
    const [userInfo, setUserInfo] = React.useState(null);

    React.useEffect(() => {
        if (!authState || !authState.isAuthenticated) {
            setUserInfo(null);
        } else {
            oktaAuth.session.get()
                .then(d=>d.user())
                .then(info => setUserInfo(info.profile));
        }
    }, [authState, oktaAuth]);
    
    const logout = async () => {
        const basename = window.location.origin + history.createHref({ pathname: '/login' });
        try {
          await oktaAuth.signOut({ postLogoutRedirectUri: basename });
        } catch (err) {
         console.log(err)
        }
      };

    if(!userInfo){
        return (
            <div className={styles.mainPage}>
                Please wait ...
            </div>
        )
    }
    return (
        <div className={styles.mainPage}>
            <h1>Hi {userInfo.firstName} {userInfo.lastName}</h1>
            <h3 className={styles.pageTitle}>Welcome to Okta sample app, Main Page</h3>
            <button onClick={logout}>Logout</button>
            <ApiCallTest />
        </div>
    )
};

export default MainPage;