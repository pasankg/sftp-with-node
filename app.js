// const http = require('http');
//
// const csv = require('csv-parser');
// const fs = require('fs');

const Client = require('ssh2-sftp-client');
const sftp = new Client();

// const hostname = 'localhost';
// const port = 3000;

/* Start Hello world app*/
/*
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/
/* End Hello world app*/



/* Start local csv reader app*/
/*
fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

 */
/* End local csv reader app*/



/* Start sftp csv reader app*/
sftp.connect({
    host: 'localhost',
    port: '22',
    username: 'foo',
    password: 'pass'
}).then(() => {
    return sftp.list('./')
}).then(data => {
    console.log(data, 'the data info');
}).catch(err => {
    console.log(err, 'catch error');
});