import bcrypt from 'bcrypt';

const saltRounds = 10;

export async function saltPassword(password) {
    return bcrypt.hash(password, saltRounds);
}

export function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash)
}
