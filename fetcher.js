const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const FILENAME = process.argv[3];
const fetcher = (URL, FILENAME) => {
  request(URL, (error, response, body) => {
    if (error) {
      console.log('URL provided failed to download');
      console.log('ERROR MESSAGE:\n', error);
      return;
    }

    fs.writeFile(FILENAME, body, error => {
      if (error) {
        console.log('Provided file is a directory or invalid filename');
        return;
      }
      console.log(
        'Downloaded and saved',
        body.length,
        'bytes to',
        FILENAME,
        '.'
      );
    });
  });
};
if (!URL || !FILENAME) {
  console.log('Please pass in two valid parameters');
} else {
  fetcher(URL, FILENAME);
}

//Downloaded and saved 1256 bytes to ./index.html
