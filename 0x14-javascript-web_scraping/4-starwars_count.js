#!/usr/bin/node
/* Display number of appearance of certain char */

const request = require('request');
const Url = process.argv[2];

request(Url, (err, response, body) => {
  if (err) console.log(err);
  else {
    let count = 0;
    const results = JSON.parse(body).results;
    for (let i = 0; i < results.length; i++) {
      const characters = results[i].characters;
      for (let j = 0; j < characters.length; j++) {
        if (characters[j].search('18') > 0) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
