import express from 'express';
import publicRoutes from './routes/public.js';
import privateRoutes from './routes/private.js';
import cors from 'cors';

import auth from './middlewares/autch.js';

const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors('www.meu-site-teste.com'));

app.use('/',publicRoutes);
app.use('/', auth, privateRoutes);


const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Servidor Rodando !!"));






















//   MongoDB
//  douglastx7
//  0kiNPjf9yACoJWOn

//    mongodb+srv://douglastx7:0kiNPjf9yACoJWOn@users.virbqkq.mongodb.net/?retryWrites=true&w=majority&appName=Users