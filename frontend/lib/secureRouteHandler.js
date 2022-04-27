import getUser from './getUser';

const secureRouteHandler = (context) => {
    const user = getUser(context);
    if (user.isExpired) return { redirect: { destination: '/login' } }
    return { props: { user } };
}

export default secureRouteHandler;