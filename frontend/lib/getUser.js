import Cookies from 'cookies';

const getToken = ({ req, res }) => {
    const cookies = new Cookies(req, res);

    const email = cookies.get('auth-email')
    const occupation = cookies.get('auth-occupation')
    const contribution = cookies.get('auth-contribution')
    const mobile = +cookies.get('auth-mobile')


    const token = cookies.get('auth-token');
    const expiresIn = cookies.get('auth-expires_in');

    const user = {};
    if (email != "undefined") user.email = email;
    if (occupation != "undefined") user.occupation = occupation;
    if (contribution != "undefined") user.contribution = contribution;
    if (mobile != "undefined") user.mobile = mobile;
    if (token != "undefined") user.token = token;
    if (expiresIn != "undefined") {
        user.expiresIn = expiresIn;
        user.isExpired = (expiresIn - new Date().getTime()) < 30000;
    };
    if (user.isExpired == undefined || user.expiresIn == null) user.isExpired = true;
    return user;
}

export default getToken;