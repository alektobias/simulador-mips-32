import path from 'path';

export default {
    dialect: 'sqlite',
    storage: path.join(__dirname, 'App', 'Cache', 'database.sqlite'),
}