#!/usr/bin/node
/* Saves the contents of a webpage to a file */

const request = require('request');
const fs = require('fs');
const apiurl = process.argv[2];
const filename = process.argv[3];

request(apiurl, (err, response, body) => {
  if (err) console.log(err);
  else {
    fs.writeFile(filename, body, 'utf8', (err) => {
      if (err) console.log(err);
    });
  }
});
