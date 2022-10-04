import {connect} from '../util/db';
import {Account} from '../models/account';
import {saltPassword} from '../util/password';
import {DEPOSIT, WITHDRAW} from '../constants';

export async function getAccountByEmail(email) {
    await connect()

    return Account.findOne({email})
}

export async function createAccount(account) {
    await connect()

    if(await getAccountByEmail(account.email)) {
        throw new Error(`Account with email: ${account.email} already exists`)
    }

    const password = await saltPassword(account.password)

    return Account.create({...account, password})
}

export async function postTransaction(email, transaction) {
    const account = await getAccountByEmail(email);
    let balance = account.balance;

    if(transaction.type === WITHDRAW) {
        balance -= transaction.amount
    } else if(transaction.type === DEPOSIT) {
        balance += transaction.amount
    }

    const transactions = [...account.transactions, transaction]

    await Account.updateOne({email: account.email}, {balance, transactions})
}
