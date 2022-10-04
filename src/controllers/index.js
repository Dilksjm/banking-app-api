import accountController from './account-controller';
import sessionController from './session-controller';
import healthController from './health-controller';


export function registerControllers(app) {
    const controllers = [accountController, sessionController, healthController];

    controllers.forEach((controller) => {
        controller.forEach(route => {
            app[route.method](route.path, route.handler)
        })
    })
}
