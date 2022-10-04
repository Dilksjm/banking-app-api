import * as service from '../services/account-service'

export const createAccountRoute = {
    path: '/accounts',
    method: 'post',
    handler: async (req, res) => {
        const {account} = req.body;

        try {
            await service.createAccount(account)
            res.status(201).json()
        } catch (e) {
            res.status(500).json(`failed to create account. err: ${e.message}`)
        }
    }
}

export const postTransactionRoute = {
    path: '/accounts/:email/transaction',
    method: 'post',
    handler: async(req, res) => {
        try {
            const {transaction} = req.body;
            const {email} = req.params;

            await service.postTransactionToAccount(email, transaction)

            res.status(200).json()
        } catch(e) {
            res.status(500).json(`failed to post transaction. err: ${e.message}`)
        }

    }
}

export default [createAccountRoute, postTransactionRoute]
