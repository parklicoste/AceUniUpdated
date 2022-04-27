import useUnSecureRoute from "../hooks/useUnSecureRoute";

const withUnSecureAuth = WrappedComponent => props => {
    const { auth, router } = useUnSecureRoute();
    return (auth.user?.isLoading || !router.isReady) ? <h1>Loading...</h1> : <WrappedComponent router={router} auth={auth} />
}

export default withUnSecureAuth;