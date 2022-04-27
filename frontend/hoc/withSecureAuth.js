import useSecureRoute from "../hooks/useSecureRoute";

const withSecureAuth = WrappedComponent => props => {
    const { auth, router } = useSecureRoute();
    return auth.user?.isLoading ? <h1>Loading...</h1> : <WrappedComponent router={router} auth={auth} />
}

export default withSecureAuth;