#!/usr/bin/node
/* Prints characters of a Star Wars movie */

const request = require('request');
const apiurl = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2] + '/';

request(apiurl, (err, response, body) => {
  if (err) console.log(err);
  else {
    const characters = JSON.parse(body).characters;
    for (let i = 0; i < characters.length; i++) {
      request(characters[i], (err, response, body) => {
        if (err) console.log(err);
        else console.log(JSON.parse(body).name);
      });
    }
  }
});
