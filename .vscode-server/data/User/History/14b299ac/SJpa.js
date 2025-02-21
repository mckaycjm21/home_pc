const fs = require('fs');
const process = require('process');
const axios = require('axios');


function cat(location) {
  fs.readFile(location, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${location}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

/** read page at URL and print it out. */

async function webCat(url) {
  try {
    let response = await axios.get(url);
    console.log(response.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}