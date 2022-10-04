import {sessions} from '../util/session';
import * as service from '../services/login-service';
import {getAccount} from '../services/account-service';

export const postSessionRoute = {
    path: '/session',
    method: 'post',
    handler: async (req, res) => {
        const {sessionId} = req.body;
        const email = sessions[sessionId]

        if(!email) {
            res.status(401).json()
        } else {
            try {
                const account = await getAccount(email)
                res.status(200).json(account)
            } catch (e) {
                res.status(500).json(e)
            }
        }
    }
}

export const loginRoute = {
    path: '/login',
    method: 'post',
    handler: async (req, res) => {
        const {email, password} = req.body;

        try {
            const {status, sessionId} = await service.authenticateUser(email, password)

            res.status(status).json({sessionId})
        } catch (e) {
            res.status(500).json(`failed to login. err: ${e.message}`)
        }
    }
}

export const logoutRoute = {
    path: '/logout',
    method: 'post',
    handler: async (req, res) => {
        const {sessionId} = req.body;

        delete sessions[sessionId];

        res.status(200).json()
    }
}

export default [postSessionRoute, loginRoute, logoutRoute]
