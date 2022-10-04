import {getAccount} from './account-service';
import {verifyPassword} from '../util/password';
import {sessions} from '../util/session';
import {v4} from 'uuid';

export async function authenticateUser(email, password) {
    try {
        const account = await getAccount(email);

        if(!account) {
            return {status: 404}
        }

        if(await verifyPassword(password, account.password)) {
            const sessionId = v4()
            sessions[sessionId] = account.email
            return {status: 200, sessionId}
        }

        return {status: 401}
    } catch(e) {
        console.log(e)
        throw e
    }
}
