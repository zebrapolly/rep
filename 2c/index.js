import express from 'express';
import fetch from 'isomorphic-fetch';
import cors from 'cors';



const app = express();
app.use(cors());

app.get('/', function (req, res) {

  const zapr = req.query.username;
  console.log(zapr);
  const re = /@?(https?:)?(\/\/)?((www.vk|telegram|vk|vkontakte|twitter|github)[^\/]*\/)?([a-zA-Z0-9.]*)/i;
  const username = zapr.match(re);
  res.send('@'+username[5]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


