import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/auth";

const useSecureRoute = () => {
    const router = useRouter();
    const auth = useAuth();
    const user = auth.user;
    useEffect(() => {
        if ((user && user.isLoading === true) || !router.isReady) return;
        if (!user) router.replace('/login');
    }, [user, router.isReady])
    return { router, auth };
}

export default useSecureRoute;