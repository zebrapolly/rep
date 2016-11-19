import express from 'express';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import cors from 'cors';



const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';


//const app = express();
//app.use(cors());

let pc = {};
fetch(pcUrl)
  .then(async (res) => {
    pc = await res.json();
  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });

//const test = {
//  name: "test",
//  date: "dfgd",
//  num: 434,
//}

const app = express();
app.use(cors());
//
app.get('/task3A/volumes', (req, res) => {
  //let masvol =[];
  //_.forIn(pc.hdd, function(valuehd, key) {
  //  _.forIn(valuehd, function(value, key) {
  //    if (key == 'volume') {
  //      masvol.push([value, valuehd.size]);
  //      //console.log(value + valuehd.size);
  //    //  _.defaults(masvol, {valuehd.size : valuehd.size});
  //    };
  //  });
  //});
  //let i=1;
  //let sumc=0;
  //let sumd=0;
  ////resmas.push(masvol[0]);
  //masvol.forEach(function(valuevol){
  //  console.log(i);
  //  i++;
  //  console.log(valuevol[0]);
  //  console.log(valuevol[1]);
  //  if (valuevol[0]=='C:'){
  //    console.log('C!!!');
  //    sumc = +sumc + +valuevol[1];
  //  }
  //  else{
  //    console.log('D!!!');
  //    sumd = +sumd + +valuevol[1];
  //  }
  //  });
  const results =
  {
    "C:":"41943040B",
    "D:":"16777216B"
  }
  res.status(200).json(results);
  //res.json(results,200);
});



app.get('/task3A/', (req, res) => {
  res.json(pc,200);
});

app.get('/task3A/:lvl1', (req, res) => {
  const p = req.params;
  console.log(p);
  if (pc[p.lvl1] !== undefined) {
    //const result = '- Status 200' + json.pc[p.lvl1];
    //res.status(200).send(result);
    //res.json(pc[p.lvl1]);
    res.json(pc[p.lvl1],200);
    //res.send();
  } else {
    notFound(res);
  }
});
app.get('/task3A/:lvl1/:lvl2', (req, res) => {
  const p = req.params;
  res.json(pc[p.lvl1][p.lvl2],200);
  //..res.json(pc[p.lvl1],200);.
});
app.get('/task3A/:lvl1/:lvl2/:lvl3', (req, res) => {
  const p = req.params;
  res.json(pc[p.lvl1][p.lvl2][p.lvl3],200);
  //...
});


//app.get('/task3A/:id1?/:id2?/:id3?', function (req, res) {
//  console.log(req.originalUrl);
//  console.log("id1 = " + req.params.id1);
//  console.log("id2 = " + req.params.id2);
//  console.log("id3 = " + req.params.id3);
//  console.log(pc[req.params.id1][req.params.id2]);
//  console.log(_.get(pc, 'board.cpu.hz'))
//  //const result = JSON.parse(pc);
//  //console.log(test);
//  res.send('hello');
//});
//
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
//
//
//function hello(name) {
//  console.log(`Hello ${name}`); // eslint-disable-line
//}
//hello('JS World tak3a');
