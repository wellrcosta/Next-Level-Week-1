import express from 'express';

const app = express();

app.get('/users', () => {
	console.log('Testando rota em TS');
});

app.listen(3333);
