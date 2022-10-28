import express from 'express';
//import morgan from 'morgan';
import routes from './routes';

const app = express();
//app.use(morgan('dev'));
app.use(express.json());

app.use(routes);

app.get('/teste', (request,response)=> {
    return response.json({ message: 'hello'})

})

app.listen(3333, () =>{
    console.log('Server started at port 3333')
})