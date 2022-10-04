import mongoose from 'mongoose';

export async function connect() {
    if(!mongoose.connection.readyState) {
        await mongoose.connect(`mongodb+srv://dilksjm:${process.env.MONGO_PASSWORD}@banking-app.fk8im0q.mongodb.net/?retryWrites=true&w=majority`)
    }
}

