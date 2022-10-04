import mongoose from 'mongoose';

const transaction = new mongoose.Schema({
    date: String,
    type: String,
    amount: Number,
})

const account = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    balance: Number,
    transactions: [transaction]
})

export const Account = mongoose.model("account", account)
