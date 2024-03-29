#!/usr/bin/node
/* computes number of tasks completed */

const request = require('request');
const apiurl = process.argv[2];

request(apiurl, (err, response, body) => {
  if (err) console.log(err);
  else {
    const resp = {};
    const json = JSON.parse(body);
    for (let i = 0; i < json.length; i++) {
      if (json[i].completed === true) {
        if (resp[json[i].userId] === undefined) {
          resp[json[i].userId] = 0;
        }
        resp[json[i].userId]++;
      }
    }
    console.log(resp);
  }
});
