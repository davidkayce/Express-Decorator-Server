import express from 'express';
import bodyParser from 'body-parser';
import './controllers/auth';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.Router());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});