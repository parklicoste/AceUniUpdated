import { createContext, useContext, useEffect, useState } from 'react';
import cookieCutter from 'cookie-cutter';
import router from 'next/router'


export const AuthContext = createContext({
    user: { email: '', token: '', occupation: '', contribution: '', mobile: '' },
    login: user => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(props.user);

    const login = user => {
        cookieCutter.set('auth-email', user.email)
        cookieCutter.set('auth-token', user.token)
        cookieCutter.set('auth-expires_in', user.expiresIn)
        cookieCutter.set('auth-occupation', user.occupation)
        cookieCutter.set('auth-contribution', user.contribution)
        cookieCutter.set('auth-mobile', user.mobile)
        setUser(user);
        router.replace('/home');
    }

    const logout = () => {
        console.log('working')
        cookieCutter.set('auth-email')
        cookieCutter.set('auth-token')
        cookieCutter.set('auth-expires_in')
        cookieCutter.set('auth-occupation')
        cookieCutter.set('auth-contribution')
        cookieCutter.set('auth-mobile')
        setUser(null);
        router.replace('/login');
    }

    useEffect(() => {
        if (!user) return;
        setTimeout(() => {
            logout();
        }, user.expiresIn - (new Date()).getTime())
    }, [user])
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);