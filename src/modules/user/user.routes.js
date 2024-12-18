import * as UserController from './user.controller.js';
import {validateCookies} from '../../middlewares/auth.js';

export default (router) => {
    const prefix = '/users';
    router.get(prefix + '/', validateCookies, UserController.index);
}