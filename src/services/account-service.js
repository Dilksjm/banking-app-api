import * as repository from '../repositories/account-repository'
import {postTransaction} from '../repositories/account-repository';

export function getAccount(email) {
    return repository.getAccountByEmail(email)
}

export async function createAccount(account) {
    try {
        await repository.createAccount(account)
    } catch(e) {
        console.log(e)
        throw e
    }
}

export function postTransactionToAccount(email, transaction) {
    return postTransaction(email, transaction)
}
