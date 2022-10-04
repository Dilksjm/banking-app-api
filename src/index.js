import express from 'express';
import {registerControllers} from './controllers';
import cors from 'cors';

const app = express()
const port = 8080

app.use(express.json())

const corsOptions = cors({origin: '*'})
app.use(corsOptions);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
});

registerControllers(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
