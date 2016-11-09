import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/tsk2a', function (req, res) {
  console.log(req.query);
    const a = (+req.query.a)||0 ;
    const b = (+req.query.b)||0;
    res.send((a+b).toString());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
