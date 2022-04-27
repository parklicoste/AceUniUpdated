import getUser from './getUser';

const unSecureRouteHandler = (context) => {
    const user = getUser(context);
    if (!user.isExpired) return { redirect: { destination: '/home' } }
    return { props: {} };
}

export default unSecureRouteHandler;