import * as AuthController from './auth.controller.js';

export default (router) => {
    const prefix = '/auth';
    router.get(prefix + '/login', AuthController.loginPage);
    router.post(prefix + '/login', AuthController.login);
    router.post(prefix + '/logout', AuthController.logout);
}