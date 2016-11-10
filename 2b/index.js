import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/tsk2b', function (req, res) {
  //console.log(req.query);
  let masRes = req.query.fullname.match(/[\wа-яёó]+/gi);
  let finalRes;
  //console.log(!(/\d/i.test(req.query.fullname)));
  if ((masRes)&&(!(/\d/i.test(req.query.fullname)))) {
    switch (masRes.length) {
      case 1:
        finalRes = masRes[0];
        break;
      case 2:
        finalRes = masRes[1] + ' ' + masRes[0].charAt(0) + '.';
        break;
      case 3:
        finalRes = masRes[2] + ' ' + masRes[0].charAt(0) + '. ' + masRes[1].charAt(0) + '.';
        break;
      default:
        finalRes = 'Invalid fullname';
    }
    ;
  } else {
    finalRes = 'Invalid fullname';
  }
  res.send(finalRes);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
