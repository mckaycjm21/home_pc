const fs = require('fs');
const process = require('process');


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

cat(process.argv[2]);