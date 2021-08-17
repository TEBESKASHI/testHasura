import express from 'express';
import 'reflect-metadata';
import modules from './modules';
import { databaseConnect } from './database/connect';
import i18n from 'i18n';

const app = express();
app.use(i18n.init);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const parseIp = (req, res, next) => {
    res.locals.ip = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
    return next();
};

app.use(parseIp);

app.use(modules);

app.listen(3000, async () => {
    await databaseConnect();
    console.log(`API Server now listening on localhost:3000!`);
});
