import * as AuthController from './auth.controller.js';
import {validateCookies} from '../../middlewares/auth.js';

export default (router) => {
    const prefix = '/auth';
    router.get(prefix + '/login', AuthController.loginPage);
    router.post(prefix + '/login', AuthController.login);
    router.post(prefix + '/logout', validateCookies, AuthController.logout);
}