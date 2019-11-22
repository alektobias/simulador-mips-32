import express from 'express';
import routes from './routes';
import InitializeOperations from './App/middlewares/InitializeOperations';
import InitializeRegisters from './App/middlewares/InitializeRegisters';


class App  {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }
    middlewares () {
        this.server.use(express.json());
        this.server.use(InitializeOperations);
        this.server.use(InitializeRegisters)
    }
    routes() {
        this.server.use(routes);
    }

}

export default new App().server;
