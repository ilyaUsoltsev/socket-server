import Server from "./classes/server";
import { SERVER_PORT } from "./global/environment";
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';


const server = new Server();

// body parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//COR
server.app.use(cors({origin: true, credentials: true}));

//routes
server.app.use('/', router)

server.start(() => {
    console.log('server started...', SERVER_PORT);
});
