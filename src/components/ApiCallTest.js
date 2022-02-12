import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import styles from './ApiCallTest.module.css';

const ApiCallTest = () => {
    const { authState } = useOktaAuth();
    const [callConfig, setCallConfig] = React.useState({
        callType: 'GET',
        apiURL: 'http://google.com'
    });
    const onChangeField = (e)=>setCallConfig({...callConfig,[e.target.name]:e.target.value.trim()});
    const onClickCall = () => {
        fetch(callConfig.apiURL, {
            method: callConfig.callType,
            headers: {
                Authorization: `Bearer ${authState.accessToken.accessToken}`,
            },
        })
    }
    return (
        <div className={styles.root}>
            <select name="callType" onChange={onChangeField} value={callConfig.callType}>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
            </select>
            <input type="text" name="apiURL" onChange={onChangeField}
             value={callConfig.apiURL} 
                placeholder="Please type API URL here.."
                className={styles.apiURL}/>
            <button onClick={onClickCall}>Call API</button>
        </div>
    )
};

export default ApiCallTest;