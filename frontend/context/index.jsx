import { AuthContextProvider } from "./auth";

const ContextProviders = props => (
    <AuthContextProvider user={props.user}>
        {props.children}
    </AuthContextProvider>
)

export default ContextProviders;