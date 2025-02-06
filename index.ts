import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (_, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
