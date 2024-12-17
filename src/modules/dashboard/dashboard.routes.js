import * as DashboardController from './dashboard.controller.js';
import {validateCookies} from '../../middlewares/auth.js';

export default (router) => {
    const prefix = '/dashboard';
    router.get(prefix + '/', validateCookies, DashboardController.index);
}