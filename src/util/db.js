import mongoose from 'mongoose';

export async function connect() {
    if(!mongoose.connection.readyState) {
        await mongoose.connect("mongodb://localhost:27017/banking-app")
    }
}

