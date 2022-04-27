import { useAuth } from "../context/auth"
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

const withAuth = (WrappedComponent, config = { isUnSecure: null, isSecure: null }) => props => {
    const auth = useAuth();
    const user = auth.user;
    const router = useRouter();
    const [isComponent, setIsComponent] = useState(false);

    useEffect(() => {
        const isLoading = user && user.isLoading;
        if (isLoading || !router.isReady) return;
        else if (config.isSecure === true) user ? setIsComponent(true) : router.replace('/login');
        else if (config.isUnSecure === true) user ? router.replace('/home') : setIsComponent(true);
    }, [user, router.isReady])

    return isComponent && <WrappedComponent auth={auth} router={router} {...props} />
}

export default withAuth;