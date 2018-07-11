import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jsonwebtoken from 'jsonwebtoken';
import User from './src/models/userModel';
import routes from './src/routes/todoRoutes';

export const app = express();

const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todoDB', {

    //The `useMongoClient` option is no longer necessary in mongoose 5.x
    //useMongoClient: true

    //current URL string parser is deprecated, and will be removed in a future version.
    //To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
    //useNewUrlParser: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// starting Express 4.16.0, you can now use express.json() and express.urlencoded() just like in Express 3.0.
// app.use(express.urlencoded()); // to support URL-encoded bodies
// app.use(express.json());       // to support JSON-encoded bodies

// JWT setup
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
       jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'mySecretKey', (err, decode) => {
           if (err)
            req.user = undefined;

           req.user = decode;
           next();
       });
    } else {
        req.user = undefined;
        next();
    }
});

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);