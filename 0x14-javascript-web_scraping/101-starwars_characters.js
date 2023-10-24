#!/usr/bin/node
/* Print all characters of Star wars api
in right order */
const request = require('request');
const apiurl = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}/`;

request(apiurl, (err, res, body) => {
  if (err) console.log(err);
  const index = 0;
  const characters = JSON.parse(body).characters;
  printCharcter(characters, index);
});

const printCharcter = function (apiurl, i) {
  request(apiurl[i], (err, res, body) => {
    if (err) console.log(err);
    console.log(JSON.parse(body).name);
    if (++i < apiurl.length) {
      printCharcter(apiurl, i++);
    }
  });
};
