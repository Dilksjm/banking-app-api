import accountController from './account-controller';
import sessionController from './session-controller';


export function registerControllers(app) {
    const controllers = [accountController, sessionController];

    controllers.forEach((controller) => {
        controller.forEach(route => {
            app[route.method](route.path, route.handler)
        })
    })
}
