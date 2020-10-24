import React, { useState, useEffect, useCallback } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import useAjax from '../../hooks/useAjax';
import base64 from 'base-64';

const API = "https://api-js401.herokuapp.com";

export const AuthContext = React.createContext();


function AuthProvider (props) {

    const [axiosApiInstance] = useAjax();
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({})
    const [token, setToken] = useState();
    const [okToContinue, setOkToContinue] = useState(false);
    const [switchToSignup, setSwitchToSignup] = useState(false);


    const can = (capability) => {
        return store.user?.capabilities?.includes(capability);
    }

    const login = (username, password) => {
      const encoded = base64.encode(`${username}:${password}`);
        axiosApiInstance(`${API}/signin`, "post", { username, password }, { Authorization: `Basic ${encoded}` })
        .then(response => {
            validateToken(response?.data?.token);
        })
        .catch(console.error);
    }

    const signup = (body) => {
      axiosApiInstance(`${API}/signup`, "post", body)
        .then(response => {
            console.log(response.data)
            validateToken(response?.data?.token);
        })
        .catch(console.error);
    }

    const validateToken = useCallback( token => {
        try {
        const user = jwt.decode(token);
        if (user){
          console.log("user", user);
          setLoginState(true, token, user);
        } else {
          console.log('Token inValid no-user');
          setLoginState(false, null, {});
        }
        }
        catch (e) {
        setLoginState(false, null, {});
        console.log('Token Validation Error', e);
        }

    },[]);

    const logout = () => {
      cookie.remove('auth');
      setLoginState(false, null, {});
    };

    const setLoginState = async (loggedIn, token, user) => {
        cookie.save('auth', token);
        await setToken(token);
        await setLoggedIn(loggedIn);
        await setUser(user)
    };

    useEffect(() => {
        const qs = new URLSearchParams(window.location.search);
        const cookieToken = cookie.load('auth');
        const token = qs.get('token') || cookieToken || null || props.token;
        console.log("token", token)
        validateToken(token);
    },[props.token, validateToken]);

    const store = {
        loggedIn,
        login,
        signup,
        logout,
        can,
        user,
        token,
        okToContinue,
        setOkToContinue,
        switchToSignup,
        setSwitchToSignup
    };

        return (
        <AuthContext.Provider value={store}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;